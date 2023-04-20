import react, {useState, useEffect} from 'react'
import Users from '@/models/User';
import Link from 'next/link'
import { useStateContext } from '../../context/StateContext';
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import { toast } from 'react-hot-toast';
import cookie from "cookie"

import review from '@/sanity/schemas/review';
import { useSession, getSession, signIn } from 'next-auth/react';



 
  export default function slug({data, reviewsData}){
   
    const {fullName, finalPrice, actualPrice, image, qtyUnit, description, _id} = data
    const [index, setIndex] = useState(0)
    const { isDesc, setIsDesc,adder, qty, incQty, decQty,sessionChecker } = useStateContext();
    // const  session = useSession()
  // submitReview({
  //   product_id : data._id, 
  //   text : 'This product is amazing!',
  //   rating: 5,
  //   author: 'John Doe'
  // })

  // Favorite Adder 
  // console.log('session checker is ', sessionChecker().data?.user.email)
  //  useEffect(()=>{
  //      const toastMessage = cookie.parse(document.cookie).toastMessage;
  //      console.log('toast message is : \n\n\n\\n\n\n', toastMessage)
  //      if(toastMessage){
  //         toast.success(toastMessage);
  //         document.cookie = "toastMessage=; Max-Age=-99999999;";
  //      }
       
  //  },[]);
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
                       <input className='hidden' type='text' name='productId' value={_id}/>
                       <input className='hidden' type='text' name='userId' value={sessionChecker().data?.user.email}/>
                       {console.log('session checker output is : ', sessionChecker())};
                       <button type='submit'><img className=' cursor-pointer' alt='star' src='../Star.png' /></button>
                   </form>
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
            <Link href={'/checkout/cart'} className='cta-btn rounded-3xl px-3 py-2 drop-shadow-xl hover:drop-shadow-sm font-bold bg-[#ffc700] text-white outline' onClick={()=> {adder(data,qty);}}>Buy Now</Link>
        </div>

        <div className='details-n-reviews flex justify-around w-11/12 mx-auto bg-[#d9d9d9] rounded-2xl py-2 px-3 my-4 sticky top-1'>
             <button className={` py-1 w-4/5`}>Description</button>
        </div>
        {<div className='description text-[#8a8a8e] w-11/12 mx-auto text-justify my-5'>
            <p>{description}</p>
        </div>}
        
       

    </div>
    
  )
}

// function reviewThrower(review, length){
//    return <>
//             <div className='review-card'>
//                 <div className='image-n-userName flex gap-3 align-middle'>
//                       <img alt='user-icon' className=' w-6' src='../user.webp.webp' />
//                       <p className='pt-1'>{review.author}</p>
//                 </div>
//                 <div className="cart-product-ratings flex gap-1">
//                           <div className="rating-card px-2 bg-green-700 rounded text-white flex gap-1 items-center">
//                               <p>{review.rating}</p>
//                               <img alt='rating' className='w-4 h-4' src='../star-rating.png' />
//                           </div>
//                           <p className=' font-semibold text-slate-600 text-sm'>{length}</p>
//                       </div>
//                 <p className=' text-[#8a8a8e] text-sm'>{review._updatedAt.slice(0,10)}</p>
//                 <p className='review detail text-gray-500 border-b-2 border-gray-200 pb-2 leading-tight mt-2'>{review.text}</p>
  
//             </div>
//    </>
// }

// const submitReview = async (reviewData) => {
//   try {
//     const result = await client.create({
//       _type: 'reviews',
//       ...reviewData
//     })
//     console.log('Review submitted successfully!', result)
//   } catch (error) {
//     console.error('Error submitting review', error)
//   }
// }

// async function favoriteAdder(_id){
  // const session = getSession();
  // if(session.data==null){
  //   console.log('insdie here')
  //   return <h1 onClick={signIn}>Sign In</h1>
  // }
  // else {
//     const user = Users.findOne({email : session.user.email})
//     console.log('user inside state conetxt is : ', user)
//     user.wishlist.push(_id);
//     await user.save();
//   }
// }



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
  console.log('product._id is : ', product?._id);
  

  return {
    props: {  data : product,
      reviewsData : reviews
     }
  }
}



