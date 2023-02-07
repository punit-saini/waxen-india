import product from '@/sanity/schemas/product';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1); 
    const [isDesc, setIsDesc] = useState(true)

    let foundProduct;
    let index;

    function adder(product, quantity){
       

      const alreadyInCart=cartItems.find((cartProduct) => cartProduct._id === product._id )

      setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.finalPrice * quantity)
      setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)


      if(alreadyInCart){
        const updatedCartItems = cartItems.map((cartProduct)=>{
          if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity : cartProduct.quantity + quantity
          }
        })
      setCartItems(updatedCartItems)
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}])
      }


      setQty(1)
      toast.success(`${qty} ${product.shortName} added to the cart.`);
    } 

    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item._id === product._id);
      const newCartItems = cartItems.filter((item) => item._id !== product._id);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.finalPrice * foundProduct.quantity);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
      setQty(1)
    }

    function incQty(){
      if(qty<=5) setQty((prevQty)=> prevQty + 1)
    }
    function decQty(){
      if(qty>=2) setQty((prevQty)=> prevQty - 1)
    }


    const toggleCartItemQuanitity = (id, value) => {
   
      foundProduct = cartItems.find((item) => item._id === id)
      index = cartItems.findIndex((product) => product._id === id);
      const newCartItems = cartItems.filter((item) => item._id !== id)
      console.log('found product is : ', foundProduct, '\n index is :', index, '\n new cart items is ', newCartItems)
      if(value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.finalPrice)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.finalPrice)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
      }

      console.log('total price now is :' + totalPrice, foundProduct.quantity )

    }






  return (                                     
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        isDesc,
        setIsDesc,
        adder,
        qty,
        incQty,
        decQty,
        toggleCartItemQuanitity,
        totalPrice,
        totalQuantities,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);