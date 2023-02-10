import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/utils';

export default ()=>{
     const { setCartItems, setTotalPrice, setTotalQuantities, checkAuth} = useStateContext();

    const show = checkAuth();

  
        useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
    }, [])

  
    return (
        <>
         <div className="min-h-screen bg-slate-200 text-center">
        <div className="success w-5/6 mx-auto py-24">
          <p className="icon">
            {/* <BsBagCheckFill /> */}
          </p>
          <h2 className=' font-bold text-2xl mb-8'>Thank you for your order!</h2>
          <p className="email-msg">Your Order will be delivered in 2-3 days.</p>
          <p className="description">
            If you have any questions, please email : <br></br> 
            <a className="font-semibold" href="mailto:order@example.com">
              waxenindia@gmail.com
            </a>
          </p>
           <Link href="/">
              <button
                type="button"
                className=" rounded-full px-3 py-2 bg-[#ffc700] text-white text-lg mt-6"
              >
                Continue Shopping
              </button>
            </Link>
        </div>
        </div>
        {/* {!show && <div>
               <div>you seems to be on the wrong page</div>
        </div>} */}
        
    </>
      
    )
}