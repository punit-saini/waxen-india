import React from "react";
import Link from "next/link";
import { getSession, signOut} from "next-auth/react";


export default function(props){
    // const {sessionChecker} = useStateContext();
    const {name,image,email } = props

    // console.log('session iss ssss : ', name)
    return <div className=" text-center my-auto">
       <div className="detail-container text-center w-5/6 my-10 mx-auto">
          <img src={image} className="w-20 h-20 rounded-full mx-auto mb-8 border-2 border-[#ffc700]" />
           <h1 className="font-bold text-lg">{name}</h1>
           <h3>{email}</h3>
           <div className=" flex justify-around my-4 mt-12">
               <Link className=" border-slate-600 px-1 py-1 rounded bg-zinc-200 drop-shadow-lg" href={'/my-profile/my-orders'}><img className="w-20 h-16 pb-2" src="./orders.png" /> <p>Orders</p></Link>
               <Link className=" border-slate-600 px-1 py-1 rounded bg-zinc-200 drop-shadow-lg" href={'/wishlist'}><img className="w-20 h-16 pb-2" src="./wishlist.png" /> <p>Wishlist</p></Link>
           </div>
       </div>

       <button onClick={signOut} className='rounded-full px-6 py-3 bg-[#ffc700] text-white text-lg font-bold drop-shadow-lg'>Sign Out</button>

    </div>
}

export async function getServerSideProps(context){
    const session = await getSession(context);
    if(!session){
        return {
          redirect : {
            destination : '/sign-in',
            permanent : false,
          }
        }
      }
      else {
        return {
            props : {
                name : session.user.name,
                image : session.user.image,
                email : session.user.email
            }
        }
      }
}