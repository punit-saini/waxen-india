import React from 'react'
import { Cart } from './';
import { useSession, signIn, signOut} from 'next-auth/react'
import { useStateContext} from '../context/StateContext';
import {  useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/lib/client';


export default ()=>{
       const { cartItems, query, setQuery} = useStateContext(); 
      //  const [results, setResults] = useState([])
      //  useEffect(()=>{
      //    console.log('query is ', query)
      //  }, [query])
      //  const handleSubmit = async (e) => {
      //    e.preventDefault();
      //    const res = await client.fetch(`*[_type == "product" && category == 'dairy']`);
      //    console.log(res)
      //  }
      const session=useSession()
           const [search,setSearch]=useState(false);
           const handleSearchChange = async(e) => {
            setQuery(e.target.value);
            if(e.target.value=='') {
               setSearch(false)
               return 
            }
            console.log('i am in')
            setSearch(true)
           }
           const queryDeletor = async()=>{
            setQuery('')
            setSearch(false)
           }
    return( 
        <>

        <div className="bg-[#22292e] ">
            <div className="brandNicons flex justify-between w-11/12 align-middle mx-auto pt-4">
               <div className="top-logo w-44">
                  <Link href={'/'}><img src="../logo.png" alt="waxen-india logo" /></Link>
               </div>
               <div className='flex gap-3'>
                     <div className="profile">
                        {session.data==null?<button onClick={signIn}>Sign In</button> : <button onClick={signOut}><img src='../User Profile 4.png' className='w-7 mt-1' alt='user-profile'></img></button>}
                     </div>
                     <div className="saved-icon">
                        <img src='../Star.png' className='w-7 mt-1' alt='saved-images'></img>
                     </div>
                     <div className="top-icons cursor-pointer flex justify-end items-center">
                        <Link href={'/checkout/cart'}><img src="../Shopping Cart.png" className=" w-7" alt="shopping cart icon" /></Link>
                        <span className={` ${cartItems.length>=1? '' : 'hidden'} rounded-full relative right-2 bottom-2 text-white text-xs px-1 bg-red-500`}>{cartItems.length}</span>
                     </div>
              
               </div>

            </div>
          
             <form className="flex py-2 w-full text-center m-auto">
                <input type={"text"} className=" w-full px-3 pr-16 py-2 m-auto text-sm relative left-3 text-[#59595a]" name='query' value={query} onChange={handleSearchChange} placeholder="Search for products & brands"></input>
                <div className='flex z-50'>
                  {search && <img alt='search-icon' className="w-3 h-3 relative right-11 top-3 cursor-pointer" onClick={queryDeletor}  src={"./cross.png"} />}
                  <button href={`/search/${query}`} className="w-7 h-7 relative right-9 bottom-1" >
                   <img alt='search-icon' className='relative top-2' src="../search.png" />
                  </button>
                </div>
                
             </form>
        </div>
        
        {/* {showCart && <Cart />} */}
        </>
     )
}