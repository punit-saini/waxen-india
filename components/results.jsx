import Product_Card from '@/components/Product_Card'


export default (data)=>{
    console.log('this is the data i recieved : ', data)
    return (
        <div className='card-container mb-3 flex justify-between  flex-wrap'>
                          <Product_Card productsData={data.data} />
                          
                    </div>
    )
}

