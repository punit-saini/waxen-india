import React from "react";
import { Toast } from "react-hot-toast";
import Users from "@/models/User";
import { useSession, getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";

export default function(props) {
  const { products, userId } = props;
  const handleClick =  () => {
    setTimeout(()=>{
    toast.success("Removed from the wishlist", {duration : 2000, position : 'bottom-center', style : { background : '#222720', color : '#ffc700', marginBottom : '5rem'}});
    }, 1000)
 }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      {products.length === 0 ? (
        <h1>No items in wishlist</h1>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <li
              key={product._id}
              className="border rounded-md overflow-hidden shadow-md"
            >
              <div className="h-64 flex items-center justify-center bg-gray-200">
                <img
                  alt={product.name}
                  src={urlFor(product.image[0]).width(300).height(300).url()}
                  className="h-40 w-40 object-contain border-gray-300 shadow-sm"
                />
              </div>
              <div className="px-4 py-2">
                <Link href={`/product/${product.slug.current}`} className="font-medium text-gray-900 hover:text-gray-700">
                    {product.shortName}
                </Link>
                <div className="mt-1">
                  <span className="font-bold text-gray-900">
                    ₹{product.finalPrice}
                  </span>
                  {product.actualPrice && (
                    <span className="ml-2 line-through text-gray-500">
                      ₹{product.actualPrice}
                    </span>
                  )}
                </div>
                <form
                  method="post"
                  action="/api/db/remove-from-wishlist"
                  autoComplete="off"
                  className="flex mt-3"
                >
                  <input className="hidden" value={userId} name="userId" />
                  <input className="hidden" value={product._id} name="productId" />
                  <button onClick={handleClick}
                    type="submit"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Remove
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("session here is", session);
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const user = await Users.find({ email: session.user.email }).exec();
  const data = JSON.parse(JSON.stringify(user));
  const products = [];
  for (let i = 0; i < data[0].wishlist.length; i++) {
    const query = `*[_type == "product" && _id == "${data[0].wishlist[i]}"][0]`;
    await client
      .fetch(query)
      .then((product) => {
        console.log("Product found:", product);
        products.push(product);
      })
      .catch((err) => {
        console.error("Error retrieving product:", err);
      });
  }
  return {
    props: {
      products,
      userId: session.user.email,
    },
  };
}
