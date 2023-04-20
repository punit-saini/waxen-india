import Link from "next/link" 

export default function Custom404() {

    return <>
        <h1 className="min-h-screen font-bold text-2xl my-20 text-center">404! Ye kahan aa gaye tum?</h1>
        <Link className="text-black" href={'/'}>Mujhe wapas le chalo</Link>
      
    </>
  }
