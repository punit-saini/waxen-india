import react, {useState} from 'react'
import Link from 'next/link'
import { client } from '@/lib/client';
import { urlFor } from '@/lib/client';
import {  signIn, signOut} from 'next-auth/react'


export default function(){
    // const session = useSession();

    return (
      <>
        <button onClick={signIn}>Sign In</button>
                                  
  </>
    )
}

