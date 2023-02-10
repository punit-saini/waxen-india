import React from 'react'
import Orders from "@/models/Order";
import connectMongo from "@/utils/connectMongo";
export default async function addOrder(req, res) {
    try {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');
  
      console.log('CREATING DOCUMENT');
      console.log(req.body)
      const order = await Orders.create(req.body);
      console.log('CREATED DOCUMENT');
        res.redirect(200, '/')
    } catch (error) {
      console.log(error);
      res.redirect('/failed')
    }

  }
