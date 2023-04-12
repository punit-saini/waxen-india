import React from 'react'
import Orders from "@/models/Order";
import connectMongo from "@/utils/connectMongo";
import product from '@/sanity/schemas/product';
export default async function addOrder(req, res) {
    try {
      const cartItems = JSON.parse(req.body.cartItems)
      let orderItems = cartItems.map((item)=>{
         return {
          product_id : item._id,
          quantity : item.quantity
         }
      })
      console.log('ORDER iTEM IS : ', orderItems[0])
      console.log('ORDER iTEMs ARE : ', orderItems)
      const newOrder = {
        name : req.body.name,
        contact : req.body.number,
         userId : req.body.userId,
        shippingAddress : req.body.house + req.body.area + req.body.pincode,
        totalPrice : req.body.totalPrice,
        userId : req.body.userId,
        products : orderItems
      }
      console.log('NEW ORDER IS : ', newOrder)
      const order = await Orders.create(newOrder);
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
