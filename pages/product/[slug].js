import react, {useState} from 'react'
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';



 
  export default function slug({data}){
         const {fullName, finalPrice, actualPrice, image, qtyUnit, description} = data
  const [index, setIndex] = useState(0)
  const { isDesc, setIsDesc,adder, qty, incQty, decQty, setShowCart } = useStateContext();

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
                   <img alt='star' src='../Star.png' />
                </div>
                <div className='price-n-addToCart flex mt-3 justify-between flex-grow-0'>
                    <h2 className='price font-bold text-2xl'>₹ {finalPrice} <span className=' text-xs text-[#8a8a8e] font-light'>{qtyUnit}</span></h2>
                    <div className='addToCart flex justify-end gap-1'>
                       <button onClick={decQty} className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>-</button>
                       {/* <p className='px-2 font-bold rounded-lg text-xl bg-white border-2 border-[#828282] w-8'>{qty}</p> */}
                       <button className='px-2 font-bold rounded-lg text-l bg-white border-2 border-[#828282]'>{qty}</button>
                       <button onClick={incQty} className='px-2 font-bold rounded-lg text-3xl bg-[#e5e5ea] text-[#828282]'>+</button>
                    </div>
                </div>
        </div>

        <div className='cta-btns w-11/12 mx-auto my-5 flex justify-around text-center'>
            <button className='cta-btn rounded-3xl px-3 py-2 drop-shadow-lg hover:drop-shadow-sm font-bold  border-2 bg-white border-[#ffc700] text-[#ffc700] outline' onClick={() =>adder(data, qty)}> Add To Cart</button>
            <button className='cta-btn rounded-3xl px-3 py-2 drop-shadow-xl hover:drop-shadow-sm font-bold bg-[#ffc700] text-white outline' onClick={()=> {adder(data,qty); setShowCart('true')}}>Buy Now</button>
        </div>

        <div className='details-n-reviews flex justify-around w-11/12 mx-auto bg-[#d9d9d9] rounded-2xl py-2 px-3 my-4 sticky top-1'>
             <button onClick={()=>{setIsDesc(true)}} className={` py-1 w-4/5  ${isDesc ? 'selected-class' : ''}`}>Description</button>
             <button onClick={()=>{setIsDesc(false)}} className={` py-1 w-4/5 ${!isDesc ? 'selected-class' : ''} `}>Reviews</button>
        </div>
        {isDesc && <div className='description text-[#8a8a8e] w-11/12 mx-auto text-justify my-5'>
            <p>{description + image.length}</p>
        </div>}
        
       {!isDesc && <div className='reviews w-11/12 mx-auto my-5'>
            <div className='review-card'>

              <div className='image-n-userName flex gap-3 align-middle'>
                    <img alt='user-icon' className=' w-6' src='../user.webp.webp' />
                    <p className='pt-1'>Reviewer Name</p>
              </div>
              <div className='stars flex mt-2 gap-1'>
                    <img alt='star' src='../star-filled.png' />
                    <img alt='star' src='../star-filled.png' />
                    <img alt='star' src='../star-filled.png' />
                    <img alt='star' src='../star-empty.png' />
                    <img alt='star' src='../star-empty.png' />
              </div>
              <h2 className=' font-bold mt-2 text-[#222720]'>Review Title</h2>
              <p className=' text-[#8a8a8e] text-sm'> Reviewd Date</p>
              <p className='review detail text-gray-500 border-b-2 border-gray-200 pb-2 leading-tight mt-2'> Review Detail. ----------- I recently purchased the Kodak TV from Amazon and overall, my experience has been satisfactory. The picture quality is good and the streaming capabilities are convenient. The user interface is easy to navigate, although it did take me a little bit of time to get used to settle there.</p>
            </div>
        </div>}

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
  

  return {
    props: {  data : product }
  }
}



