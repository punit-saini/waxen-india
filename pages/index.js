
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Product_Card from '@/components/Product_Card'

export default function Home() {
  return (
    <>

      <main className='bg-[#fbfbfb]'>
        {/* Categories */}
          <div className="categories-bar flex w-full flex-nowrap overflow-x-auto pb-1 pt-1 px-2 bg-[#fbfbfb] mx-auto text-center border-b-4 border-[#ffc700]">
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./vegetables.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Fruits & Vegetables</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./meat.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Meat</Link>
              </div>
              
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./dairy.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Dairy Products</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./drinks.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Drink & Beverages</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./vegetables.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Vegetables</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./dairy.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Dairy Products</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./meat.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Meat</Link>
              </div>
              <div className="category-card w-32 flex flex-col pr-1">
                  <img className='w-16 h-8 rounded-lg' src="./dairy.png" />
                  <Link className="text-[12px] leading-none font-semibold" href={"#"}>Dairy Products</Link>
              </div>
          </div>

             {/* Carousel */}
             
             <Link href={"#"}><img className=' mt-5 w-11/12 mx-auto h-40 rounded-xl' src="./banner.webp" /></Link> 

             {/* Trending products */}

            <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Popular Deals</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"#"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                    <Product_Card />
                    </div>

            {/* Diary Products */}

            <div className='popular-deals flex justify-between font-Nunito w-11/12 mx-auto my-8 text-lg px-1'>
                 <h2 className=' text-xl font-bold'>Cold Drinks & Beverages</h2>
                 <Link className=' text-[#ffc700] underline cursor-pointer' href={"#"}>View All</Link>
            </div>

                    {/* Product Card */}
                    <div className='card-container mb-3 flex justify-between  flex-wrap'>
                    <Product_Card />
                    </div>
      </main>

    
    </>
  )
}
