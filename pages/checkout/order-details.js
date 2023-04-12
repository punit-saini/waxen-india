import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import { signIn, useSession } from "next-auth/react";


export default function orderDetails(){

    const { totalPrice, cartItems, toggleCartItemQuanitity, onRemove, sessionChecker} = useStateContext();

    const inputStyle = 'py-1 px-2 border-1 border-black rounded drop-shadow-sm'
    const labelStyle = 'font-bold'
    const session = sessionChecker();
    if(session.data == null){
        return <button onClick={signIn}>Sign IN</button>
    }
    else {
        return <>
            <form id='checkout'  className='mb-6 pt-10' action="/api/db/add" autoComplete='off' method="post">
                <div id='delivery-detail' className="user-detail w-11/12 mx-auto my-12 flex flex-col gap-2">
                  <h2 className='font-bold text-xl'>Delivery Details</h2>
                  <div className="username my-6 flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="name" >Full name</label>
                    <input required className={inputStyle} type="text" name="name" id="" />
                  </div>
                  <div className="contact flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="number" >Mobile number</label>
                    <input required className={inputStyle} type="tel" name="number" id="" />
                  </div>
                  <div className="address-pincode flex flex-col gap-1 my-2">
                    <label className={labelStyle} htmlFor="pincode" >Pincode</label>
                    <input  className={`${inputStyle} w-min`} type="text" value={'132001'} name="pincode" id="" />
                    <p className=' text-sm font-light text-grey-600'>Currently, we deliver only in Karnal</p>
                  </div>
                  <div className="address-house flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="house" >Flat, House no., Apartment</label>
                    <input required className={inputStyle} type="text" name="house" id="" />
                  </div>
                  <div className="address-area flex flex-col gap-1">
                    <label className={labelStyle} htmlFor="area" >Area, Street, Sector</label>
                    <input required className={inputStyle} type="text" name="area" id="" />
                  </div>

   
                    
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
     
}
