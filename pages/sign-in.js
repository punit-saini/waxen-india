import react, {useState} from 'react'
import Link from 'next/link'
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import {  signIn, signOut, getSession} from 'next-auth/react'


export default function(){
    // const session = useSession();

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-6">Please Sign In</h1>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={signIn}
        >
          Sign In
        </button>
      </div>
    );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session){
    return {
        redirect : {
          destination : '/',
          permanent : false,
        }
      }
  }
  else {
    return {
      props : {
        detail : ''
      }
    }
  }
 }
