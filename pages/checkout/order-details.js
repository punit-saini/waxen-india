import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import { getSession, signIn, useSession } from "next-auth/react";
import Users from "@/models/User";


export default function orderDetails(props){

    const { totalPrice, cartItems, sessionChecker} = useStateContext();
    const inputStyle = 'py-1 px-2 border-1 border-black rounded drop-shadow-sm'
    const labelStyle = 'font-bold'
    const [mobile, setMobile] = useState(props?.mobile);
    const [street, setStreet] = useState(props?.street);
    const [orderName, setOrderName] = useState(props?.orderName)
    const session = sessionChecker();
     console.log('cart items are ', cartItems[0]);
  
        return <>
            <form id='checkout'  className='mb-6 pt-10' action="/api/db/add" autoComplete='off' method="post">
                <div id='delivery-detail' className="user-detail w-11/12 mx-auto my-12 flex flex-col gap-2">
                  <h2 className='font-bold text-xl'>Delivery Details</h2>
                  <div className="username my-6 flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="orderName" >Full name</label>
                    <input required className={inputStyle} type="text" value={orderName} onChange={(event)=>{ setOrderName(event.target.value)}} name="orderName" id="" />
                  </div>
                  <div className="contact flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="mobile" >Mobile number</label>
                    <input required className={inputStyle} type="tel" name="mobile" value={mobile} onChange={(event)=>{ setMobile(event.target.value)}}  />
                  </div>
                  <div className="address-house flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="street" >Address</label>
                    <input required className={inputStyle} value={street} onChange={(event)=>{ setStreet(event.target.value)}}  type="text" name="street" id="" />
                  </div>
                  <div className="address-pincode flex flex-col gap-1 my-2">
                    <label className={labelStyle} htmlFor="pincode" >Pincode</label>
                    <input  className={`${inputStyle} w-min`} type="text" value={'132001'} name="pincode" id="" />
                    <p className=' text-sm font-light text-grey-600'>Currently, we deliver only in Karnal</p>
                  </div>
                  {/* <div className="address-area flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="area" >Area, Street, Sector</label>
                    <input required className={inputStyle} type="text" name="area" id="" />
                  </div> */}

   
                    
              </div>
                <input className='hidden w-0' type="text" name="cartItems" value={JSON.stringify(cartItems)}  />
                <input className='hidden' type="text" name="totalPrice" value={totalPrice} />
                <input className='hidden' type="text" name="userId" value={session.data.user.email} />
              <div className="place-order-btn pb-24 w-11/12 mx-auto text-center">
              <button type='submit' className='rounded-full px-6 py-3 bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg' href={'#delivery-detail'}>Place Order</button>
              </div>
              {console.log('cart items here inside order details are : ', cartItems[0].actualPrice)}
           </form>
        </>
}
     



export  async function getServerSideProps(context){
   const session = await getSession(context);
  // console.log('user details are  : ', userDetails)
  if(!session){
    return {
      redirect : {
        destination : '/sign-in',
        permanent : false,
      }
    }
  }
  const user = await Users.findOne({email : session.user.email})

  return {
    props : {
      orderName : user.orders[user.orders.length-1]?.orderName || "",
      street : user.orders[user.orders.length-1]?.address.street || "",
      mobile : user.orders[user.orders.length-1]?.mobile || ""
    }
  }
  // return {
  //   props : {
  //     detail : ''
  //   }
  // }
}