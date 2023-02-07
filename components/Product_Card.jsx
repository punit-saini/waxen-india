import {useState} from 'react'
import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'


const productCard = ({productsData})=> {
                
       const { adder, qty } = useStateContext();

       const [imagevar, setImageVar]=useState("add")
                function handleclick(){
                        setImageVar(()=> {
                            return ("added")
                    })   
                    
                    setInterval(() => {
                        setImageVar(()=>{
                            return ("add")
                        })
                    }, 5000);
                    return 
                }

    return (
        
    <> 

    { productsData && productsData.map((product)=>(


        <div key={product._id} className="card w-[45%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-sm text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1">
            <Link href={`/product/${product.slug.current}`}>
            <div className="card-head">
     <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
     <img src={urlFor(product.image[0])}  className="rounded h-28 w-5/6" />
     </div>

 </div>

 <div className="card-body w-11/12 mx-auto my-2">

     <div className="name-n-price flex justify-between ">
         <h2 className=" w-[75%] text-md mb-1 leading-4 font-semibold">{product.shortName}</h2>
         <p className="text-sm text-[#8a8a8e]">{product.qtyUnit}</p>
     </div>

     <h2 className="price font-extrabold text-lg text-black">₹ {product.finalPrice} <span className=' line-through text-sm text-[#8a8a8e]'>₹{product.actualPrice}</span> </h2>

     <div className={`rating-n-addBtn flex  ${product.rating? 'justify-between' : ' justify-end'} items-center`}>

         { product.rating &&  <div className={`rating-card px-2 ${product.rating >3.5 ?'bg-green-700' : 'bg-yellow-600'} rounded text-white flex gap-1 items-center`}>
                    <p>{product.rating}</p>
                    <img className='w-4 h-4' src='../star-rating.png' />
            </div>}
        
            <button  className=" text-white w-6"><img className="rounded" onClick={handleclick} src={`../${imagevar}.png`} /></button>

     </div>


 </div>
            </Link>
             
            
        </div>
     
            
    ))}


     
    </>
    )
}

export default productCard