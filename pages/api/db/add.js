import React from 'react'
import Users from '@/models/User';

export default async function addOrder(req, res) {
    try {
      let totalPrice=0;
      const cartItems = JSON.parse(req.body.cartItems)
      let orderItemsArray = cartItems.map((item)=>{
          totalPrice+=item.finalPrice;
         return {
          productId: item._id,
          quantity : item.quantity,
          price : item.finalPrice,
          url : item.slug.current,
          shortName : item.shortName
         }
      })
      
      const newOrder = {
        orderId : Math.floor(Math.random()*100000)+1,
        orderDate : new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+ new Date().getFullYear(),
        orderName : req.body.orderName,
        mobile : req.body.mobile,
        address : {
          street : req.body.street,
          pincode : req.body.pincode,
        },
         userId : req.body.userId,
        totalPrice : totalPrice,
        orderItems : orderItemsArray,
      }
      console.log('NEW ORDER IS : ', newOrder)
      const user= await Users.findOne({email : req.body.userId});
      user.orders.push(newOrder)
    
      await user.save();
      console.log('CREATED DOCUMENT');
      res.writeHead(302, {
        Location: '/orderCompleted',
      });
      res.end();
      
    } catch (error) {
      console.log(error);
      res.redirect('/failed')
    }

  }
