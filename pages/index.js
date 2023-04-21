
import { Inter } from '@next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { getSession} from 'next-auth/react'
import Product_Card from '@/components/Product_Card'
import { urlFor } from '../lib/client'
import { client } from '../lib/client';



export default  function Home({popularDeals, drinksNBeverages, grocery, bannerImage}) {
        const session=getSession()
        console.log('session is :', session);
  return (
    <>

      <main className='bg-[#fbfbfb]'>
        {/* Categories */}
          <div className="categories-bar flex w-full flex-nowrap overflow-x-auto pb-1 pt-1 px-2 bg-[#fbfbfb] mx-auto text-center border-b-4 border-[#ffc700]">
              
              <Link  href={"/category/services"} className="category-card w-32 flex flex-col gap-1 pr-1">
                  <img alt='services' className='w-16 h-12 rounded-lg' src="./services.png" />
                  <p className="text-[12px] leading-none font-semibold" >Services</p>
              </Link>

              <Link href={"/category/groceries"} className="category-card w-32 flex flex-col gap-1 pr-1">
                   <img alt='groceries' className='w-16 h-12 rounded-lg' src="./groceries.png" />
                  <p className="text-[12px] leading-none font-semibold" >Groceries</p>
              </Link>
              
              <Link href={"/category/dairy"} className="category-card w-32 flex flex-col gap-1 pr-1">
           
                  <img alt='dairy' className='w-16 h-12 rounded-lg' src="./electronics.png" />
                  <p className="text-[12px] leading-none font-semibold" >Electronics</p>
      
              </Link>
              <Link href={"/category/alkaline-water"} className="category-card w-32 flex flex-col gap-1 pr-1">
             
                  <img alt='beverages' className='w-16 h-12 rounded-lg' src="./water.png" />
                  <p className="text-[12px] leading-none font-semibold" >Alkaline Water</p>
             
              </Link>

              <Link href={"/category/maintainence"} className="category-card w-32 flex flex-col gap-1 pr-1">
                  <img alt='vegetables' className='w-16 h-12 rounded-lg' src="./maintainence.png" />
                  <p className="text-[12px] leading-none font-semibold" >Waxen AMC</p>                    
              </Link>
              
            
          </div>
          {/* Marquee */}
          
          <marquee class="bg-gray-100 py-2 mt-2 px-4 rounded-lg shadow-lg">
            <Link href={'/category/alkaline-water/'}>
                <span class="inline-block font-medium text-gray-800 leading-6">
                   👉 Checkout Alkaline Water Products
                </span>
            </Link>
          </marquee>


          

             {/* Carousel */}
             
             <Link href={"#"}><img alt='banner' className=' mt-1 w-11/12 mx-auto h-40 rounded-xl drop-shadow-xl' src={urlFor(bannerImage[0].image)} /></Link> 

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
                 <h2 className=' text-xl font-bold'>Alkaline Water</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/category/alkaline-water/"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={drinksNBeverages} />
                    
                    </div>

           {/* Dairy Products */}

           <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Groceries</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"/category/groceries"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={grocery} />
                    
                    </div>
          

                  {/*  details */}


            <div>
             <div class="p-6 mt-12 bg-gray-100 rounded-lg">
             <h1 className="text-2xl font-bold mb-8">About Waxen Alkaline Water</h1>
                <p class="text-md font-medium text-gray-800 leading-relaxed">
                Waxen Alkaline Water represents more than just a beverage. It is a lifestyle choice and a step towards ensuring the well-being of our families. When you choose our product, you are not only purchasing water but investing in your health. Our product line includes three distinct categories: Natural Alkaline Stone Bag, Handy Alkaline Filter, and Portable Steel Water Alkalizer, as well as our signature Water Pot Alkaline.
                </p>
              </div>
            </div>

            <div>
             <div class="p-6 mt-12 bg-gray-100 rounded-lg">
             <h1 className="text-2xl font-bold mb-8">About Waxen Multigrin Atta</h1>
                <p class="text-md font-medium text-gray-800 leading-relaxed">
                Waxen Multigrain Atta is an Ayurvedic blend of multiple grains that provides a balanced combination of protein, fiber, calcium, vitamins, and carbohydrates. This unique composition strengthens the body and promotes good health. Ayurveda recognizes the following benefits of our multigrain atta: it boosts immunity and energy, aids digestion and alleviates constipation, promotes weight loss, relieves cold and cough symptoms, eases tension, headaches, and migraines, promotes healthy bones and teeth, is beneficial during pregnancy, reduces the risk of UTI (Urinary Tract Infection), enhances skin health and reduces wrinkles, and promotes healthy hair.
                </p>
              </div>
            </div>

            
            {/* contact */}
           <div className=' bg-transparent'>
           <Link className=' fixed bottom-12 bg-transparent right-3 md:hidden' href="https://wa.me/+919034422377">
                 <img className='shadow-lg  w-14 h-14 bg-transparent transition-all duration-300 ease-in-out z-50' src='../whatsapp.png' />
            </Link>
           </div>
            
            {/* Email */}

            <div class="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
              <p class="text-lg font-medium mb-2">Do you have any queries?</p>
              <p class="text-gray-600 mb-4">Please send us an email and we'll get back to you as soon as possible.</p>
              <a href="mailto:care@wakxen.com" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out">Email Us</a>
            </div>




      </main>

    
    </>
  )
}



export async function getStaticProps() {
    
    const popularDeals = await client.fetch(`*[_type == "product" && ('popular' in tags)][0...3]`);
    const drinksNBeverages = await client.fetch(`*[_type == "product" && category == "drinks-n-beverages"][0...3]`);
    const dairy = await client.fetch(`*[_type == "product" && category == "electronic"][0...3]`)
    const grocery = await client.fetch(`*[_type == "product" && category == "grocery"][0...3]`)
    const bannerImage = await client.fetch(`*[_type == "banner"]`)

    return {
      props: {
        popularDeals, drinksNBeverages, dairy, grocery, bannerImage
      }
    };
  }

