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
    const [isDesc, setIsDesc] = useState(true);
    const [query, setQuery] = useState('');
    const [imagevar, setImageVar]=useState("add");



    let foundProduct;
    let index;

    function checkAuth(){
      console.log('inside checkAuth function', cartItems.length);
      if(cartItems.length>=1){
       return true
      }
      else {
        return false
      }
    }

    function adder(product, quantity){
       

      const alreadyInCart=cartItems.find((cartProduct) => cartProduct._id === product._id )

      setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.finalPrice * quantity)
      setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)


      if(alreadyInCart){
        const updatedCartItems = cartItems.map((cartProduct)=>{
          console.log('cart product quantity is : ' + cartProduct.quantity, ' and quantity is : ', quantity)
          if(cartProduct._id == product._id) return {
            ...cartProduct,
            quantity : cartProduct.quantity + quantity
          }
          else {
            return {...cartProduct}
          }
        })
      //   setCartItems([ { ...foundProduct, quantity: foundProduct.quantity + 1 },...newCartItems ]);
        console.log('already in cart is : ' + updatedCartItems)
      setCartItems(updatedCartItems)
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}])
      }


      setQty(1)
      toast.success(`${qty} ${product.shortName} added to the cart.`, {duration : 2000, position : 'bottom-center', style : { background : '#222720', color : '#ffc700', marginBottom : '5rem'}});
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
      console.log( 'cart items is quantity : ' , cartItems[index].quantity)
      const newCartItems = cartItems.map((cartItem)=>{
        if(cartItem._id == id){
          if(value == 'inc'){
            return {
              ...cartItem,
              quantity : cartItem.quantity + 1,
           }
          }
          else {
            return {
              ...cartItem,
              quantity : cartItem.quantity -1,
           
          }
          
        }}
        else {
            return cartItem
        }
      })
      // const newCartItems = cartItems[index].quantity +=1;
      // const newCartItems = cartItems.filter((item) => item._id !== id)
      // console.log('found product is : ', foundProduct, '\n index is :', index, '\n new cart items is ', newCartItems)
      if(value === 'inc') {
        // setCartItems([ { ...foundProduct, quantity: foundProduct.quantity + 1 },...newCartItems ]);
         setCartItems([...newCartItems])
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.finalPrice)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          // setCartItems([ { ...foundProduct, quantity: foundProduct.quantity - 1 }, ...newCartItems ]);
          setCartItems([...newCartItems])
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
        onRemove,
        setTotalPrice,
        setTotalQuantities,
        checkAuth,
        query,
        setQuery,
        imagevar,
        setImageVar
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);