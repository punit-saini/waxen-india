import React from 'react'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import {  useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/lib/client';


export default ()=>{
       const { showCart, setShowCart, cartItems, query, setQuery} = useStateContext(); 
      //  const [results, setResults] = useState([])
      //  useEffect(()=>{
      //    console.log('query is ', query)
      //  }, [query])
      //  const handleSubmit = async (e) => {
      //    e.preventDefault();
      //    const res = await client.fetch(`*[_type == "product" && category == 'dairy']`);
      //    console.log(res)
      //  }
    return( 
        <>

        <div className="bg-[#22292e] pb-4">
            <div className="brandNicons flex justify-between w-11/12 align-middle mx-auto pt-4">
               <div className="top-logo w-44">
                  <Link href={'/'}><img src="../logo.png" alt="waxen-india logo" /></Link>
               </div>
               <div className="top-icons cursor-pointer"  onClick={() => setShowCart((currentCart)=> !currentCart)}>
                  <img src="../Shopping Cart.png" className=" w-7" alt="shopping cart icon" />
                  <span className={` ${cartItems.length>=1? '' : 'hidden'} rounded-full relative bottom-10 left-4 text-white text-xs px-1 bg-red-500`}>{cartItems.length}</span>
               </div>
            </div>
          
             {/* <form onSubmit={handleSubmit} className="flex py-2 w-full text-center m-auto">
                <input type={"text"} className=" w-full px-3 py-2 m-auto relative left-3 text-[#8a8a8e]" name='query' value={query} onChange={(e)=> {setQuery(e.target.value)} } placeholder="Search for products & brands"></input>
                <button href={`/search/${query}`} type='submit' className="w-7 relative right-5" >
                   <img src="../search.png" />
                </button>
             </form> */}
        </div>
        
        {showCart && <Cart />}

        </>
     )
}