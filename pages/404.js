import Link from "next/link" 

export default function Custom404() {

    return <>
        <h1 className="min-h-screen font-bold text-2xl my-20 text-center">404! Ye kahan aa gaye tum?</h1>
        <Link href={'/'}>Mujhe wapas le chalo</Link>
        {/* <div className="checkout-btn w-11/12 mx-auto text-center">
           <Link className='rounded-full px-6 py-3 bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg' href={'/'}>Mujhe wapas le chalo</Link>
        </div> */}
    </>
  }
