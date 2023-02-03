import react, {useState} from 'react'
import Link from 'next/link'
const productDetails = ()=>{

  const [index, setIndex] = useState(0)
  const length=[0,1,2]
  return (
    <div className="min-h-screen">
       <h1 className=' mt-3 mb-1 w-11/12 mx-auto text-sm font-semibold'>Milk Cake (Alwar) | Authentic Milk Cake | 1kg | Pure & Fresh</h1>

        <div>

          <div className="image-container w-11/12 rounded-lg h-80 bg-[#ebebeb] mx-auto flex flex-col">
            <img src={`../pro-img${index}.png`} className=" product-detail-image max-w-[91%] min-w-[70%] mx-auto my-auto" />
          </div>

          <div className="small-images-container w-11/12 mx-auto">
            {length?.map((lenItem,i) => (
              <img 
                key={i}
                src={`../pro-img${lenItem}.png`}
                className={i == index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>

        </div>

        <div className='product-detail-body w-11/12 mx-auto'>
                <div className='discount-n-star flex justify-between'>
                   <p>40% off</p>
                   <img src='../Star.png' />
                </div>
        </div>

    </div>
    
  )
}

export default productDetails
