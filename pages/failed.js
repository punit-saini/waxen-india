import React from 'react'
import Link from 'next/link'

export default function failed () {
  return (
    <>
        <div className="min-h-screen bg-slate-200 text-center">
            <div className=" w-5/6 mx-auto py-24 font-bold text-2xl">
                   <h2>Something happened on our side. Sorry! 🥹</h2>
                   <Link href="/">
                    <button
                        type="button"
                        className=" rounded-full px-3 py-2 bg-[#ffc700] text-white text-lg mt-6"
                    >
                        Continue Shopping
                    </button>
                    </Link>
            </div>
        </div>
    </>
  )
}
