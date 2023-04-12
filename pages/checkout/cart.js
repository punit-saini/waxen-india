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
  
   
    const [showPlaceOrder, setShowPlaceOrder] = useState(false)
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
                // {console.log('cart item name is ', cartItem.shortName)}
            return (
          <div className="cart-product flex gap-5 bg-gray-50 drop-shadow-md rounded py-2 mb-8 px-2"  >
                <div className="cart-product-imgNqty w-1/3 flex flex-col gap-2 justify-center">
                        <img alt='cart-img' src={urlFor(cartItem.image[0])} className='h-24' />
                        <div className='addToCart flex justify-end gap-1'>
                            <button onClick={() => toggleCartItemQuanitity(cartItem._id, 'dec') } className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                            <button className='px-2 font-bold rounded-lg text-l bg-white border-2 border-[#828282]'>{cartItem.quantity}</button>
                            <button onClick={() => toggleCartItemQuanitity(cartItem._id, 'inc') } className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                        </div>
                </div>
                <div className="cart-product-details">
                    <h2 className='mt-2 text-lg font-bold'>{cartItem.shortName}</h2>
                    <p className='text-sm text-[#828282]'>{cartItem.qtyUnit}</p>
                    <div className="cart-product-ratings flex gap-1">
                        <div className="rating-card px-2 bg-green-700 rounded text-white flex gap-1 items-center">
                            <p>4.2</p>
                            <img alt='rating' className='w-4 h-4' src='../star-rating.png' />
                        </div>
                        <p className=' font-semibold text-slate-600 text-sm'>(12)</p>
                    </div>
                    <div className="cart-product-price flex mt-1 gap-2 items-center">
                        <h2 className=' font-bold text-lg'>{cartItem.finalPrice}</h2>
                        <p className='line-through text-sm text-[#828282]'>{cartItem.actualPrice}</p>
                        <p className='text-green-700 '>{Math.floor(100-((cartItem.finalPrice/cartItem.actualPrice)*100))}% off</p>
                    </div>
                    <div onClick={()=> onRemove(cartItem)} className="cart-product-remove absolute bottom-3 right-5 flex mt-5 items-center justify-end gap-1">
                        <img alt='trash-icon' className='w-6' src='../trash.png' />
                        <button className=' text-slate-600' > Remove </button>
                    </div>
                </div>
           </div>)

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
       { cartItems.length>=1 && !showPlaceOrder && <div className="checkout-btn pt-4 pb-10 w-11/12 mx-auto text-center">
           <Link onClick={()=> setShowPlaceOrder(true)} className='rounded-full px-6 py-3  bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg' href={'/checkout/order-details'}>Checkout</Link>
           </div>} 



{/* ////////////////// */}

{/* session.data==null? <h1>Sign In first</h1>  : */}
          {  showPlaceOrder &&  <>
           </>}

    </div>
  )
}


