import React, { useState}from 'react';
import {SessionProvider} from "next-auth/react"
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';
import Router from 'next/router';
import Loader from '@/components/Loader';



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  
    Router.events.on("routeChangeStart",(url)=>{
      console.log('Route is chaning...')
      setLoading(true)
    })
    Router.events.on("routeChangeComplete",(url)=>{
      console.log('Route is changed')
      setLoading(false)
    })

  return (
    <>
       <SessionProvider session={pageProps.session}>
          
       {loading && <Loader />}
        <StateContext>
          <Layout>
             <Toaster />
             { !loading &&
            <Component {...pageProps} /> }
          </Layout>
        </StateContext>

       </SessionProvider>
    </>
      
  )
}

export default MyApp