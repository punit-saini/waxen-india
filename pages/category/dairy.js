import react, {useState} from 'react'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';
import { client } from '@/lib/client';
import Product_Card from '@/components/Product_Card'


export default function({dairy}){
    return (
       <div className='min-h-screen'>
        <h1 className=' text-center text-xl font-bold w-5/6 my-8 mx-auto'>Dairy Products</h1>
          <div className='card-container mb-3 flex justify-between flex-wrap'>
                          <Product_Card productsData={dairy} />
                    
          </div>
       </div>
    )
}

export async function getStaticProps() {
    
    const dairy = await client.fetch(`*[_type == "product" && category == 'dairy']`);
    return {
      props: {
        dairy
      }
    };
  }
