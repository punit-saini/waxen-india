import React from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import Orders from "@/models/Order";
import orderDetails from "../checkout/order-details";
import Link from "next/link";
import Users from "@/models/User";
import mongoose from "mongoose";
import { client } from "@/lib/client";

export default function OrderHistoryPage(props) {
  const { orders } = props;
  // const session = useSession();

  return (
    <div className="container mx-auto my-10 w-11/12">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {orders.length >= 1 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="border-2 border-gray-200 shadow-md rounded-lg mb-8 p-4"
          >
            <div>
              <h2 className="font-bold text-lg mb-2">
                Order Date: {order.orderDate}
              </h2>
              <p className="text-gray-500 text-sm">
                Order Status: {order.orderStatus}
              </p>
              <p className="text-gray-500 text-sm">
                Order Amount: ₹{order.totalPrice}
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <h3 className="font-bold text-lg mb-2">Products</h3>
              {order.orderItems.map((product) => (
                <div
                  key={product._key}
                  className="flex items-center justify-between mb-2"
                >
                  <Link
                    href={`/product/${product.url}`}
                    className="font-semibold text-gray-700 hover:text-gray-800"
                  >
                    {product.shortName}
                  </Link>
                  <span className="text-gray-600 text-sm">
                    {product.quantity} x ₹{product.price}
                  </span>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div>
              <h3 className="font-bold text-lg mb-2">
                Order For: {order.orderName}
              </h3>
              <p className="text-gray-500">
                Delivery Address: {order.address.street}
              </p>
              <p className="text-gray-500 text-sm">
                Order Status: {order.orderStatus}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No Orders Yet</p>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  } else {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log("session email is ", session.user.email);

    const user = await Users.find({ email: session.user.email }).exec();
    await mongoose.connection.close();
    return {
      props: {
        orders: JSON.parse(JSON.stringify(user[0].orders)),
      },
    };
  }
}
