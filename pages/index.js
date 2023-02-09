
import { Inter } from '@next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
// import imageUrlBuilder from '@sanity/image-url'
import Product_Card from '@/components/Product_Card'
// import product from '@/sanity/schemas/product';
import { client } from '../lib/client';


export default  function Home({popularDeals, drinksNBeverages, dairy , grocery}) {

  return (
    <>

      <main className='bg-[#fbfbfb]'>
        {/* Categories */}
          <div className="categories-bar flex w-full flex-nowrap overflow-x-auto pb-1 pt-1 px-2 bg-[#fbfbfb] mx-auto text-center border-b-4 border-[#ffc700]">
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./vegetables.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"/category/fruits-n-vegetables"}>Fruits & Vegetables</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./meat.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"/category/groceries"}>Groceries</Link>
              </div>
              
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./dairy.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"/category/dairy"}>Dairy Products</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./drinks.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"/category/drinks-n-beverages"}>Drink & Beverages</Link>
              </div>
              
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./dairy.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"/category/services"}>Services</Link>
              </div>
            
          </div>

             {/* Carousel */}
             
             <Link href={"#"}><img className=' mt-5 w-11/12 mx-auto h-40 rounded-xl' src="./banner.webp" /></Link> 

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



export async function getStaticProps() {
    
    const popularDeals = await client.fetch(`*[_type == "product" && ('popular' in tags)]`);
    const drinksNBeverages = await client.fetch(`*[_type == "product" && category == "drinks-n-beverages"]`);
    const dairy = await client.fetch(`*[_type == "product" && category == "dairy"]`)
    const grocery = await client.fetch(`*[_type == "product" && category == "grocery"]`)

    return {
      props: {
        popularDeals, drinksNBeverages, dairy, grocery
      }
    };
  }

