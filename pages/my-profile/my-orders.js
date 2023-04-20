import React from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import Orders from "@/models/Order";
import orderDetails from "../checkout/order-details";
import Link from "next/link";
import Users from "@/models/User";
import { client } from "@/lib/client";

export default function(props) {
  const { orders } = props;
  // const session = useSession();

 
    return (
      <div className="container mx-auto my-10 flex flex-wrap w-11/12">
        <h1 className="w-full text-3xl font-bold mb-6">Order History</h1>
        {orders.length>=1 ? orders.map((order) => {
          return (
            <div
              key={order._id}
              className="w-full md:w-1/2 border-2 border-gray-200 shadow-md rounded-lg mb-8 p-4"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-lg">
                    Order Date: {order.orderDate}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 md:mt-0">
                    Order Status: {order.orderStatus}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">
                    Order Amount: ₹{order.totalPrice}
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <div>
                <h3 className="font-bold text-lg">Products</h3>
                <div className="mt-2">
                  {order.orderItems.map((product) => {
                    return (
                      <div
                        key={product._key}
                        className="flex items-center justify-between mb-2"
                      >
                        <Link href={`/product/${product.url}`} className="font-semibold text-gray-700 hover:text-gray-800">
                            {product.shortName}
                          
                        </Link>
                        <span className="text-gray-600 text-sm">
                          {product.quantity} x ₹{product.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">
                    Order For: {order.orderName}
                  </h3>
                  <p className="text-gray-500">
                    Delivery Address: {order.address.street}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Order Status: {order.orderStatus}
                  </p>
                </div>
              </div>
            </div>
          );
        }): <p>No Orders Yet</p>}
      </div>
    );
  
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session){
    return {
        redirect : {
          destination : '/sign-in',
          permanent : false,
        }
      }
  }
  else {
    console.log("session email is ", session.user.email);

    const user = await Users.find({ email: session.user.email }).exec();
    return {
      props: {
        orders: JSON.parse(JSON.stringify(user[0].orders)),
      },
    };
  }
 }
