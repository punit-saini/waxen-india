import Product_Card from '@/components/Product_Card'
import { useRouter } from 'next/router'


export default ()=>{
    const router = useRouter();
    const { products } = router.query;
    console.log('this is the data i recieved : ', products)
    return (
        <div className='my-4'>
                    <h2 className=' text-center mx-auto my-10 font-bold text-xl'>Search Results</h2>
                    <div className='card-container mb-3 my-2 flex justify-between  flex-wrap'>
                        { products &&  <Product_Card productsData={JSON.parse(products)} /> }
                    </div>
        </div>
       
    )
}

