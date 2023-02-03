import {useState} from 'react'
export default ()=>{
       const [imagevar, setImageVar]=useState("add")
    function handleclick(){
             setImageVar(()=> {
                return ("added")
           })   
           
           setInterval(() => {
              setImageVar(()=>{
                return ("add")
              })
           }, 5000);
           return 
    }
    return (
    <> 
      <div className="card w-[45%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-sm text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1">
        <div className="card-head">

            <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
            <img src="./dal.webp"  className="rounded h-28 w-5/6" />
            </div>

        </div>

        <div className="card-body w-11/12 mx-auto my-2">

            <div className="name-n-price flex justify-between ">
                <h2 className=" text-lg font-bold">Dal (Urad)</h2>
                <p className="text-md text-[#8a8a8e]">1kg</p>
            </div>

            <h2 className="price font-extrabold text-lg">₹ 60</h2>

            <div className="mrp-n-addBtn flex  justify-between align-middle">
                <p className=" text-sm text-[#8a8a8e]">M.R.P. <span className=" line-through">₹80</span></p>
                <button className=" text-white w-8"><img className="rounded" onClick={handleclick} src={`./${imagevar}.png`} /></button>
            </div>

        </div>
       
      </div>


      <div className="card w-[45%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-sm text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1">
        <div className="card-head">

            <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
            <img src="./dal2.webp"  className="rounded h-28 w-5/6" />
            </div>

        </div>

        <div className="card-body w-11/12 mx-auto my-2">

            <div className="name-n-price flex justify-between ">
                <h2 className=" text-lg font-bold">Dal (Urad)</h2>
                <p className="text-md text-[#8a8a8e]">1kg</p>
            </div>

            <h2 className="price font-extrabold text-lg">₹ 60</h2>

            <div className="mrp-n-addBtn flex  justify-between align-middle">
                <p className=" text-sm text-[#8a8a8e]">M.R.P. <span className=" line-through">₹80</span></p>
                <button className=" text-white w-8"><img className="rounded" onClick={handleclick} src={`./${imagevar}.png`} /></button>
            </div>

        </div>
       
      </div>


     
      <div className="card w-[45%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-sm text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1">
        <div className="card-head">

            <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
            <img src="./dal3.webp"  className="rounded h-28 w-5/6" />
            </div>

        </div>

        <div className="card-body w-11/12 mx-auto my-2">

            <div className="name-n-price flex justify-between ">
                <h2 className=" text-lg font-bold">Dal (Urad)</h2>
                <p className="text-md text-[#8a8a8e]">1kg</p>
            </div>

            <h2 className="price font-extrabold text-lg">₹ 60</h2>

            <div className="mrp-n-addBtn flex  justify-between align-middle">
                <p className=" text-sm text-[#8a8a8e]">M.R.P. <span className=" line-through">₹80</span></p>
                <button className=" text-white w-8"><img className="rounded" onClick={handleclick} src={`./${imagevar}.png`} /></button>
            </div>

        </div>
       
      </div>


 

      <div className="card w-[45%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] hover:drop-shadow-sm text-[#22292e] bg-[#f9f9f9] rounded mb-12 font-Nunito tracking-normal leading-1">
        <div className="card-head">

            <div className="product-img w-full rounded mx-auto px-2 py-2 my-1 bg-[#ebebeb] flex justify-center">
            <img src="./dal4.webp"  className="rounded h-28 w-5/6" />
            </div>

        </div>

        <div className="card-body w-11/12 mx-auto my-2">

            <div className="name-n-price flex justify-between ">
                <h2 className=" text-lg font-bold">Dal (Urad)</h2>
                <p className="text-md text-[#8a8a8e]">1kg</p>
            </div>

            <h2 className="price font-extrabold text-lg">₹ 60</h2>

            <div className="mrp-n-addBtn flex  justify-between align-middle">
                <p className=" text-sm text-[#8a8a8e]">M.R.P. <span className=" line-through">₹80</span></p>
                <button className=" text-white w-8"><img className="rounded" onClick={handleclick} src={`./${imagevar}.png`} /></button>
            </div>

        </div>
       
      </div>

     
    </>
    )
}