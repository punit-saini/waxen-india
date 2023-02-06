import React, { useRef } from 'react';
import Link from 'next/link';

import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const cartRef = useRef();
  const { setShowCart} = useStateContext();

  return (
      <div className="cart-container h-screen bg-gray-100 ">


        <div className="cart-product-container w-11/12 mx-auto py-8">



               
          <div className="cart-product flex gap-5 bg-gray-50 drop-shadow-md rounded py-2 mb-8 px-2">
                <div className="cart-product-imageNqty w-1/3 flex flex-col gap-2 justify-center">
                        <img src='../dal.webp' className=' max-h-32' />
                        <div className='addToCart flex justify-end gap-1'>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                            <button className='px-2 font-bold rounded-lg text-xl bg-white border-2 border-[#828282]'>2</button>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                        </div>
                </div>
                <div className="cart-product-details">
                    <h2 className='mt-2 text-lg font-bold'>Dal (Urad)</h2>
                    <p className='text-sm text-[#828282]'>1kg</p>
                    <div className="cart-product-ratings flex gap-1">
                        <div className="rating-card px-2 bg-green-700 rounded text-white flex gap-1 items-center">
                            <p>4.2</p>
                            <img className='w-4 h-4' src='../star-rating.png' />
                        </div>
                        <p className=' font-semibold text-slate-600 text-sm'>(12)</p>
                    </div>
                    <div className="cart-product-price flex mt-3 gap-2 items-center">
                        <h2 className=' font-bold text-lg'>₹ 400</h2>
                        <p className='line-through text-sm text-[#828282]'>₹699</p>
                        <p className='text-green-700 '>40% off</p>
                    </div>
                    <div className="cart-product-remove flex mt-5 items-center justify-end gap-1">
                        <img className='w-6' src='../trash.png' />
                        <button className=' text-slate-600' > Remove </button>
                    </div>
                </div>
           </div>





               
          <div className="cart-product flex gap-5 bg-gray-50 drop-shadow-md rounded py-2 mb-8 px-2">
                <div className="cart-product-imageNqty w-1/3 flex flex-col gap-2 justify-center">
                        <img src='../dal.webp' className=' max-h-32' />
                        <div className='addToCart flex justify-end gap-1'>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                            <button className='px-2 font-bold rounded-lg text-xl bg-white border-2 border-[#828282]'>2</button>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                        </div>
                </div>
                <div className="cart-product-details">
                    <h2 className='mt-2 text-lg font-bold'>Dal (Urad)</h2>
                    <p className='text-sm text-[#828282]'>1kg</p>
                    <div className="cart-product-ratings flex gap-1">
                        <div className="rating-card px-2 bg-green-700 rounded text-white flex gap-1 items-center">
                            <p>4.2</p>
                            <img className='w-4 h-4' src='../star-rating.png' />
                        </div>
                        <p className=' font-semibold text-slate-600 text-sm'>(12)</p>
                    </div>
                    <div className="cart-product-price flex mt-3 gap-2 items-center">
                        <h2 className=' font-bold text-lg'>₹ 400</h2>
                        <p className='line-through text-sm text-[#828282]'>₹699</p>
                        <p className='text-green-700 '>40% off</p>
                    </div>
                    <div className="cart-product-remove flex mt-5 items-center justify-end gap-1">
                        <img className='w-6' src='../trash.png' />
                        <button className=' text-slate-600' > Remove </button>
                    </div>
                </div>
           </div>





               
          <div className="cart-product flex gap-5 bg-gray-50 drop-shadow-md rounded py-2 mb-8 px-2">
                <div className="cart-product-imageNqty w-1/3 flex flex-col gap-2 justify-center">
                        <img src='../dal.webp' className=' max-h-32' />
                        <div className='addToCart flex justify-end gap-1'>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                            <button className='px-2 font-bold rounded-lg text-xl bg-white border-2 border-[#828282]'>2</button>
                            <button className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                        </div>
                </div>
                <div className="cart-product-details">
                    <h2 className='mt-2 text-lg font-bold'>Dal (Urad)</h2>
                    <p className='text-sm text-[#828282]'>1kg</p>
                    <div className="cart-product-ratings flex gap-1">
                        <div className="rating-card px-2 bg-green-700 rounded text-white flex gap-1 items-center">
                            <p>4.2</p>
                            <img className='w-4 h-4' src='../star-rating.png' />
                        </div>
                        <p className=' font-semibold text-slate-600 text-sm'>(12)</p>
                    </div>
                    <div className="cart-product-price flex mt-3 gap-2 items-center">
                        <h2 className=' font-bold text-lg'>₹ 400</h2>
                        <p className='line-through text-sm text-[#828282]'>₹699</p>
                        <p className='text-green-700 '>40% off</p>
                    </div>
                    <div className="cart-product-remove flex mt-5 items-center justify-end gap-1">
                        <img className='w-6' src='../trash.png' />
                        <button className=' text-slate-600' > Remove </button>
                    </div>
                </div>
           </div>





        </div>
           
      </div>
  )
}

export default Cart