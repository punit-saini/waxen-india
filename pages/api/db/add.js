import React from 'react'
import Users from '@/models/User';
import connectMongo from "@/utils/connectMongo";
import product from '@/sanity/schemas/product';
import orderCompleted from '@/components/orderCompleted';

export default async function addOrder(req, res) {
    try {
      let totalPrice=0;
      const cartItems = JSON.parse(req.body.cartItems)
      let orderItemsArray = cartItems.map((item)=>{
        console.log('item here is ', item , '\n')
          totalPrice+=item.finalPrice;
         return {
          productId: item._id,
          quantity : item.quantity,
          price : item.finalPrice,
          url : item.slug.current,
          shortName : item.shortName
         }
      })
      // console.log('ORDER iTEM IS : ', orderItems[0])
      // console.log('ORDER iTEMs ARE : ', orderItems)
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
      // user.mobile = req.body.mobile
      // user.address = {
      //   street : req.body.street,
      //   pincode : req.body.pincode,
      // },
      await user.save();
      // const order = await Orders.create(newOrder);
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
