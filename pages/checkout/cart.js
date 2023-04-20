import React, { useRef } from 'react';
import Link from 'next/link';
import { useSession,getSession, signIn, signOut} from 'next-auth/react'
import toast from 'react-hot-toast';
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import { useState } from 'react';

import { useStateContext } from '@/context/StateContext';
export default function cart(){
  
  const cartRef = useRef();
  // const session = useSession();
  const { totalPrice, cartItems, toggleCartItemQuanitity, onRemove, sessionChecker } = useStateContext();
  
   
    // const [showPlaceOrder, setShowPlaceOrder] = useState(false)
 console.log('Cart items are : ', cartItems)
//  console.log('product string is : \n' + productString)
 const userData = sessionChecker();
 
  return (

      <div className="cart-container min-h-screen bg-gray-100" ref={cartRef}>
       {/* { cartItems.length>=1 && <h1>{cartItems[0].shortName}</h1>} */}
        {cartItems.length < 1 && (
          <div className="empty-cart mx-auto text-center text-2xl pt-24">
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
                Continue Shopping
            </Link>
          </div>
        )}

        <div className="cart-product-container w-11/12 mx-auto py-8">

        {cartItems.length>=1 && cartItems.map((cartItem)=>{
              return (
                  <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 border border-gray-200 rounded-lg shadow-md py-4 px-2 mb-8">
                      <div className="w-full md:w-1/3 flex flex-col gap-2 items-center">
                          <img alt='cart-img' src={urlFor(cartItem.image[0])} className='w-40 h-40 object-contain' />
                          <div className='flex justify-center items-center gap-2'>
                              <button onClick={() => toggleCartItemQuanitity(cartItem._id, 'dec') } className='px-3 py-1 rounded-lg text-sm text-gray-700 border border-gray-400'>-</button>
                              <button className='px-3 py-1 font-semibold rounded-lg text-base bg-white text-gray-700 border border-gray-400'>{cartItem.quantity}</button>
                              <button onClick={() => toggleCartItemQuanitity(cartItem._id, 'inc') } className='px-3 py-1 rounded-lg text-sm text-gray-700 border border-gray-400'>+</button>
                          </div>
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col gap-2">
                          <div className="flex flex-col">
                              <h2 className='text-base md:text-lg font-semibold text-gray-700'>{cartItem.shortName}</h2>
                              <p className='text-sm md:text-base text-gray-400'>{cartItem.qtyUnit}</p>
                          </div>
                          <div className="flex flex-col md:flex-row justify-between items-center">
                              <div className="flex gap-2 items-center">
                                  <h2 className='font-bold text-lg text-gray-700'>{cartItem.finalPrice}</h2>
                                  <p className='line-through text-sm text-gray-400'>{cartItem.actualPrice}</p>
                                  <p className='text-green-700'>{Math.floor(100-((cartItem.finalPrice/cartItem.actualPrice)*100))}% off</p>
                              </div>
                              <div onClick={()=> onRemove(cartItem)} className="cart-product-remove flex items-center gap-2 cursor-pointer">
                                  <img alt='trash-icon' className='w-6' src='../trash.png' />
                                  <button className='text-gray-700 font-medium' >Remove</button>
                              </div>
                          </div>
                      </div>
                  </div>
              )
          })}





        </div>

           {cartItems.length>=1 && <div className="cart-price-and-btns w-11/12 mx-auto mb-6 bg-white px-2 py-1 rounded drop-shadow-md">
            <h2 className='font-bold text-lg my-2'>Price Details</h2>
              <div className="total-price flex justify-between">
                <p>Price</p>
                <p className=''>₹ {totalPrice}</p>
              </div>
              <div className="delivery-charges flex justify-between">
                <p>Delivery Charges</p>
                <p className='text-green-700'>Free Delivery</p>
              </div>
              <div className="total-price flex justify-between font-semibold">
                <p>Total Amount</p>
                <p>₹ {totalPrice}</p>


              </div>
           </div> }
       { cartItems.length>=1 && <div className="checkout-btn pt-4 pb-10 w-11/12 mx-auto text-center">
           <Link className='rounded-full px-6 py-3  bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg' href={'/checkout/order-details'}>Checkout</Link>
           </div>} 



{/* ////////////////// */}

{/* session.data==null? <h1>Sign In first</h1>  : */}
          {/* {  showPlaceOrder &&  <>
           </>} */}

    </div>
  )
}


