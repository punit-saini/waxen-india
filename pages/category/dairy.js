import react, {useState} from 'react'
import Link from 'next/link'
import { client } from '@/lib/client';
import Product_Card from '@/components/Product_Card'


export default function dairy({dairy}){
    return (
      <>
        {console.log(dairy.length)}
      { dairy.length>=1 ? ( <div className='min-h-screen'>
                                    <h1 className=' text-center text-xl font-bold w-5/6 my-8 mx-auto'>Dairy Products</h1>
                                    <div className='card-container mb-3 flex justify-between flex-wrap'>
                                      <Product_Card productsData={dairy} />
                                    </div>
                                 </div>)
                              :
                               <div className='min-h-screen'>
                                 <h1 className=' text-center text-xl font-bold w-5/6 my-8 mx-auto'>Sorry! Currently no product exist in this category</h1>
                                  <div className="place-order-btn pb-24 w-11/12 mx-auto text-center">
                                  <Link className='rounded-full px-6 py-3 bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg' href={'/'}>Continue Shopping!</Link>
                                  </div>
                                  </div>}
                                  
  </>
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
