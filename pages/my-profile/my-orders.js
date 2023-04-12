import React from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import Orders from "@/models/Order";
import orderDetails from "../checkout/order-details";

export default function(props){
    const {orders} = props;
    const session = useSession()
    if(session.data==null){
        return <h1 onClick={signIn}>Sign IN FIrst</h1>
    }
    else {
        return <>
            <h1>order details are </h1>
            {orders.map((order)=>{
                <h1>{order.totalPrice}</h1>
                //   {console.log('order price is ', order.totalPrice)}
            })}
        </>
    }
}

export async function getServerSideProps(context){
    const session = await getSession(context)
    if(session){
     console.log('session email is ', session.user.email)
   const orders = await Orders.find({userId : session.user.email}).exec();
    return {
        props : {
            orders : JSON.parse(JSON.stringify(orders))
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