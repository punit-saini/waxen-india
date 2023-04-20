import React from 'react'
// import { Cart } from './';
import { useSession, signIn, signOut} from 'next-auth/react'
import { useStateContext} from '../context/StateContext';
import {  useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { client } from '@/lib/client';
import Results from './results';


export default ()=>{
       const { cartItems} = useStateContext(); 
      const router = useRouter();
      const session=useSession()
      console.log('session is : ', session)
      const [query, setQuery] = useState('');
      const [showResult, setShowResult] = useState(false)
      const [results, setResults]= useState([]);
      async function handleSubmit(event){
         event.preventDefault();
         const response = await fetch(`/api/search?q=${query}`)
         const data = await response.json();
         console.log('yeah! data is : ',data)
         setShowResult(true)
         setResults(data.data);
         router.push({
            pathname : "/results",
            query : { products : JSON.stringify(data)}
         })
      }
    return( 
        <>
        <div className="bg-[#22292e] ">
            <div className="brandNicons flex justify-between w-11/12 align-middle mx-auto pt-4">
               <div className="top-logo w-36">
                  <Link href={'/'}><img src="../logo.png" alt="waxen-india logo" /></Link>
               </div>
               <div className='flex gap-3'>
                     <div className="profile">
                        {session.data==null?<button className=' text-[#ffc700]  text-sm' onClick={signIn}>Sign In / Up?</button> : <Link href={'/my-profile'}><img src={session.data.user.image} className='w-7 h-7 rounded-full border-2 border-[#ffc700]' alt='user-profile'></img></Link>}
                     </div>
                     <div className="saved-icon">
                        <Link href={'/wishlist'}><img src='../Star.png' className='w-7 ' alt='saved-images'></img></Link>
                     </div>
                     <Link href={'/checkout/cart'} className="top-icons cursor-pointer flex justify-end items-center">
                        <img src="../Shopping Cart.png" className=" mb-2 w-7" alt="shopping cart icon" />
                        <span className={` ${cartItems.length>=1? '' : 'hidden'} rounded-full relative right-2 bottom-2 text-white text-xs px-1 bg-red-500`}>{cartItems.length}</span>
                     </Link>
                  
              
               </div>

            </div>
          
             <form onSubmit={handleSubmit} className="flex py-2 w-full text-center m-auto">
                <input type="text" className=" w-full px-3 pr-16 py-2 m-auto text-sm relative left-3 text-[#59595a]" value={query} onChange={((event)=> setQuery(event.target.value))} placeholder="Search for products & brands"/>
                  <button type='submit' className="w-7 h-7 relative right-9 bottom-1" >
                   <img alt='search-icon' className='relative top-2' src="../search.png" />
                  </button>
             </form>
        </div>
        {/* {showResult && < Results data={results} />} */}
        {/* {showCart && <Cart />} */}
        </>
     )
}