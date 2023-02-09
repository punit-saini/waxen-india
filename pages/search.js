import react, {useState} from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import { useStateContext } from '../context/StateContext';
import { client } from '@/lib/client';
import productCard from '@/components/Product_Card';



export default function({dairy}){
    //  const Router = useRouter()
    // const dairy = await client.fetch(`*[_type == "product" && category == '${Router.query.query}]`);
      // console.log(dairy)
      
    return (
       <div className='min-h-screen'>
        <h1 className=' text-center text-xl font-bold w-5/6 my-8 mx-auto'>Search Results For</h1>
          <div className='card-container mb-3 flex justify-between flex-wrap'>
              {/* <productCard productsData={products}/>
               */}
               hello namaste
          </div>
       </div>
   )
}


// export async function getStaticProps() {
    
//   const dairy = await client.fetch(`*[_type == "product" && category == 'dairy']`);
//   return {
//     props: {
//       dairy
//     }
//   };
// }

