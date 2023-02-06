import React from 'react'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';


export default ()=>{

       const { showCart, setShowCart} = useStateContext(); 
    return( 
        <>

        <div className="bg-[#22292e]">
            <div className="brandNicons flex justify-between w-11/12 align-middle mx-auto pt-4">
               <div className="top-logo w-44">
                  <img src="../logo.png" alt="waxen-india logo" />
               </div>
               <div className="top-icons"  onClick={() => setShowCart((currentCart)=> !currentCart)}>
                  <img src="../Shopping Cart.png" className=" w-7" alt="shopping cart icon" />
                  <span className=" rounded-full relative bottom-10 left-4 text-white text-xs px-1 bg-red-500">1</span>
               </div>
            </div>
          
             <form className="flex py-2 w-full text-center m-auto">
                <input type={"text"} className=" w-full px-3 py-2 m-auto relative left-3 text-[#8a8a8e]" placeholder="Search for products & brands"></input>
                <button className="w-7 relative right-5" type="submit"><img src="../search.png" /></button>
             </form>
        </div>
        
        {showCart && <Cart />}

        </>
     )
}