export default ()=>{
    return( 
        <>

        <div className="bg-[#22292e]">
            <div className="brandNicons flex justify-between w-11/12 align-middle mx-auto pt-4 pb-2">
               <div className="top-logo w-44">
                  <img src="../logo.png" alt="waxen-india logo" />
               </div>
               <div className="top-icons">
                  <img src="../Shopping Cart.png" className=" w-7" alt="shopping cart icon" />
               </div>
            </div>
          
             <form className="flex py-3 w-full text-center m-auto">
                <input type={"text"} className=" w-full px-3 py-2 m-auto relative left-3 text-[#8a8a8e]" placeholder="Search for products & brands"></input>
                <button className="w-7 relative right-5" type="submit"><img src="../search.png" /></button>
             </form>
        </div>
        
        </>
     )
}