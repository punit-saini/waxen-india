import react, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import { toast } from 'react-hot-toast';



 
  export default function slug({data, reviewsData}){
   
    const {fullName, finalPrice, actualPrice, image, qtyUnit, description, _id} = data
    const [index, setIndex] = useState(0)
    const { adder, qty, incQty, decQty,sessionChecker } = useStateContext();
    const handleClick =  () => {
       setTimeout(()=>{
       toast.success("Added to the wishlist", {duration : 2000, position : 'bottom-center', style : { background : '#222720', color : '#ffc700', marginBottom : '5rem'}});
       }, 1000)
    }

  return (
    <div className="">
       <h1 className=' stick mt-3 mb-1 w-11/12 mx-auto text-sm font-semibold'>{fullName}</h1>
        <div>

          <div className="image-container w-11/12 rounded-lg h-80 bg-[#ebebeb]  mx-auto flex flex-col">
            <img alt='banner-image-home' src={urlFor(image[index])} className=" max-h-[90%] product-detail-image max-w-[91%]  min-w-[70%] mx-auto my-auto" />
          </div>

          <div className="small-images-container w-11/12 mx-auto">
            {image?.map((Image,i) => (
              <img 
                key={i}
                src={urlFor(Image)}
                className={i == index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)} 
                alt='banner-image-small'
              />
            ))}
          </div>

        </div>

        <div className='product-detail-body w-11/12 mx-auto'>
                <div className='discount-n-star flex justify-between  items-center mt-3'>
                   <h2 className=' bg-red-600 rounded-2xl text-white px-3 py-1'>{Math.floor(100-((finalPrice/actualPrice)*100))}% off</h2>
                   {/* wishlist */}
                   <form id='wishList-form' action="/api/db/addToWishList" method="POST">
                   <div>
                       <input className='hidden' type='text' name='productId' value={_id}/>
                       <input className='hidden' type='text' name='userId' value={sessionChecker().data?.user.email}/>
                       <button onClick={handleClick}><img className=' cursor-pointer' alt='star' src='../Star.png' /></button>
                    </div>
                   </form>
                </div>
                <div className='price-n-addToCart flex mt-3 justify-between flex-grow-0'>
                    <h2 className='price font-bold text-2xl'>₹ {finalPrice} <span className=' text-xs text-[#8a8a8e] font-light'>{qtyUnit}</span></h2>
                    <div className='addToCart flex justify-end gap-1'>
                       <button onClick={decQty} className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                       <button className='px-2 font-bold rounded-lg text-l bg-white border-2 border-[#828282]'>{qty}</button>
                       <button onClick={incQty} className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                    </div>
                </div>
        </div>

        <div className='cta-btns w-11/12 mx-auto my-5 flex justify-around text-center'>
            <button className='cta-btn rounded-3xl px-3 py-2 drop-shadow-lg hover:drop-shadow-sm font-bold  border-2 bg-white border-[#ffc700] text-[#ffc700] outline' onClick={() =>adder(data, qty)}> Add To Cart</button>
            <Link href={'/checkout/cart'} className='cta-btn rounded-3xl px-3 py-2 drop-shadow-xl hover:drop-shadow-sm font-bold bg-[#ffc700] text-white outline' onClick={()=> {adder(data,qty);}}>Buy Now</Link>
        </div>

    
        <h2 class="text-gray-800 text-2xl font-bold mb-4 w-11/12 mx-auto">Description</h2>


        <div class="p-6 bg-gray-100 rounded-lg">
          <p class="text-lg font-medium text-gray-800 leading-relaxed">
            {description}
          </p>
        </div>

        
       

    </div>
    
  )
}




export async function getStaticPaths(slug) {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}


export async function getStaticProps ({ params: { slug }}) {
  console.log('slug is :'+ slug)
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  
  const product = await client.fetch(query);
  const reviewQuery = `*[_type == "reviews" && product_id == '${product?._id}']`;
  const reviews = await client.fetch(reviewQuery);
  

  return {
    props: {  data : product,
      reviewsData : reviews
     }
  }
}



