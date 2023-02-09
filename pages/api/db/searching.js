import React from 'react'
import { client } from '@/lib/client';
import Product_Card from '@/components/Product_Card'
import { useRouter } from 'next/router';

export default async function searching(req,res) {
    console.log('body value is ',req.body.query)
    // res.status(200).redirect(`/search`)
    
  }


//   export async function getServerSideProps() {
//     const Router = useRouter()
//    const query = `*[_type == "product" && (${Router.query.query} in options || fullName match ${Router.query.query})]`
//     const  products =  client.fetch(query);
//   return {
//     props: {
//       products
//     }
//   };
// }