import React from 'react'
import Users from '@/models/User';
import mongoose from 'mongoose';
import { MongoClient } from "mongodb";

export default async function addOrder(req, res) {
 
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
// const uri = process.env.MONGO_URI;
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
      // const users = client.db().collection("users");
      const user = await Users.findOne({ email: req.body.userId });
      user.orders.push(newOrder);
      await user.save();
      console.log('CREATED DOCUMENT');
      await mongoose.connection.close();
      res.writeHead(302, {
        Location: '/orderCompleted',
      });
      res.end();
      
    } catch (error) {
      console.log(error);
      res.redirect('/failed')
    }

  }
