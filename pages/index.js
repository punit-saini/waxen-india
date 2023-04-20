
import { Inter } from '@next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useSession, getSession} from 'next-auth/react'
// import imageUrlBuilder from '@sanity/image-url'
import Product_Card from '@/components/Product_Card'
// import product from '@/sanity/schemas/product';
import { client } from '../lib/client';



export default  function Home({popularDeals, drinksNBeverages, dairy , grocery}) {
        const session=getSession()
        console.log('session is :', session);
  return (
    <>

      <main className='bg-[#fbfbfb]'>
        {/* Categories */}
          <div className="categories-bar flex w-full flex-nowrap overflow-x-auto pb-1 pt-1 px-2 bg-[#fbfbfb] mx-auto text-center border-b-4 border-[#ffc700]">
              <Link href={"/category/fruits-n-vegetables"} className="category-card w-32 flex flex-col gap-1 pr-1">
                  <img alt='vegetables' className='w-16 h-12 rounded-lg' src="./vegetables.png" />
                  <p className="text-[12px] leading-none font-semibold" >Vegetables</p>                    
              </Link>
              <Link href={"/category/groceries"} className="category-card w-32 flex flex-col gap-1 pr-1">
                   <img alt='groceries' className='w-16 h-12 rounded-lg' src="./groceries.png" />
                  <p className="text-[12px] leading-none font-semibold" >Groceries</p>
              </Link>
              
              <Link href={"/category/dairy"} className="category-card w-32 flex flex-col gap-1 pr-1">
           
                  <img alt='dairy' className='w-16 h-12 rounded-lg' src="./dairy.png" />
                  <p className="text-[12px] leading-none font-semibold" >Dairy</p>
      
              </Link>
              <Link href={"/category/drinks-n-beverages"} className="category-card w-32 flex flex-col gap-1 pr-1">
             
                  <img alt='beverages' className='w-16 h-12 rounded-lg' src="./beverages.png" />
                  <p className="text-[12px] leading-none font-semibold" >Beverages</p>
             
              </Link>
              
              <Link  href={"/category/services"} className="category-card w-32 flex flex-col gap-1 pr-1">
                  <img alt='services' className='w-16 h-12 rounded-lg' src="./services.png" />
                  <p className="text-[12px] leading-none font-semibold" >Services</p>
              </Link>
            
          </div>

             {/* Carousel */}
             
             <Link href={"#"}><img alt='banner' className=' mt-5 w-11/12 mx-auto h-40 rounded-xl drop-shadow-xl' src="./banner.png" /></Link> 

             {/* Trending products */}

            <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Popular Deals</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/popular-deals"}>View All</Link>
            </div>

                    {/* Product Card */}

              
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                  
                              <Product_Card productsData={popularDeals} />
                    
                              
                            
                    </div>

            {/* Drinks n beverages Products */}

            <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Cold Drinks & Beverages</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/category/drinks-n-beverages"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={drinksNBeverages} />
                    
                    </div>

           {/* Dairy Products */}

           <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Dairy</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/category/dairy"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={dairy} />
                    
                    </div>
          

           {/* Grocery Products */}

           <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Grocery</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/category/groceries"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={grocery} />
                    
                    </div>



      </main>

    
    </>
  )
}



export async function getServerSideProps() {
    
    const popularDeals = await client.fetch(`*[_type == "product" && ('popular' in tags)][0...3]`);
    const drinksNBeverages = await client.fetch(`*[_type == "product" && category == "drinks-n-beverages"][0...3]`);
    const dairy = await client.fetch(`*[_type == "product" && category == "dairy"][0...3]`)
    const grocery = await client.fetch(`*[_type == "product" && category == "grocery"][0...3]`)

    return {
      props: {
        popularDeals, drinksNBeverages, dairy, grocery
      }
    };
  }

