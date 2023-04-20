import Product_Card from '@/components/Product_Card'


export default (data)=>{
    return (
        <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={data.data} />
                          
                    </div>
    )
}

