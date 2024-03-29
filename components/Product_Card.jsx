import {useState} from 'react'
import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'
import product from '@/sanity/schemas/product'


const productCard = ({productsData})=> {
                
       const { adder } = useStateContext();

             

    return (
        
    <>



    { productsData.length>=1 ? productsData.map((product)=>(


    <div key={product._id} className="card w-[45%] drop-shadow-lg hover:drop-shadow-md text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1 ">
           
            <div className="card-head">
               <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
                <Link href={`/product/${product.slug.current}`}>
                <img alt='product-banner' src={urlFor(product.image[0])}  className="rounded h-28 w-5/6" />
                </Link>
            </div>

    </div>

    <div className="card-body mt-3 w-11/12 mx-auto pb-2">

            <div className="name-n-qty flex justify-between">
                <Link className="w-2/3 text-sm mb-1 leading-4 font-bold text-[#222720]" href={`/product/${product.slug.current}`}>{product.shortName}</Link>
                <p className="text-xs text-[#8a8a8e]">{product.qtyUnit}</p>
            </div>

            <h2 className="price font-extrabold text-lg text-black">₹ {product.finalPrice} <span className=' line-through text-xs text-[#8a8a8e] ml-1'>₹{product.actualPrice}</span> </h2>

            <div className=' absolute bottom-0 right-2'>
               <button className=" text-white w-6 "><img alt='add' className="rounded" onClick={() => adder(product,1)} src={`../add.png`} /></button>
            </div>

         

        </div>
                    
                    
                    
     </div>
     
            
    )): <h1>No Product Found</h1>}


     
    </>
    )
}

export default productCard