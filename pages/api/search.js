import { groq } from 'next-sanity'
import { client } from '@/lib/client'

export default async function search(req, res) {
  const { q } = req.query
// console.log('query is : ', q)
const regex = new RegExp(`.*${q}.*`, 'i');
const params = { regex };
const query = `*[_type == "product" && (shortName match "*${q}*" || "${q}" in tags )]`;
// console.log('query is : ', query)
const products = await client.fetch(query,params);
  console.log('products found is search are : ', products.length)
 
  res.status(200).json(products)
}
