import React from "react";
import { Toast } from "react-hot-toast";
import Users from "@/models/User";
import { useSession, getSession, signIn } from "next-auth/react";

export default function(){
     const session= useSession();
     const {wishList} = props;
     if(session.data==null){
        return <h1 onClick={signIn}>Sign In First</h1>
     }
     else {
        return <>
           {wishList.map((product)=>{
            <h1>Wishlist is  {product.productId}</h1>
                  {console.log('product id is ', product.productId)}

           })}
        </>
     }
}


export async function getServerSideProps(context){
    const session = await getSession(context)
    if(session){
     console.log('session email is ', session.user.email)
   const wishList = await Users.find({userId : session.user.wishlist}).exec();
    return {
        props : {
            wishList : JSON.parse(JSON.stringify(wishList))
        }
    }
  }
  else {
    return {
       props : {
        key : 'value'
       }
    }
  }  
}