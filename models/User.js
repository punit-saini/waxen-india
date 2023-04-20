import { model, models } from "mongoose";
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image : {
    type : String,
  },
  orders: [{
    address: {
      street: {
        type: String,
        required: true
      },
      pincode: {
        type: String,
        required: true
      }
    },
    mobile: {
      type: String,
      required: true
    },
    orderName : {
      type : String,
      required : true,
    },
    orderId: {
      type: String,
      required: true
    },
    orderDate: {
      type: String,
      required: true,
      default: Date.now
    },
    orderItems: [{
      productId: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price : {
        type : Number,
        required : true,
      },
      url : {
        type : String,
        required : true,
      },
      shortName : {
        type : String,
        required : true,
      }
    }],
    orderStatus: {
      type: String,
      enum: ['pending', 'shipped', 'delivered'],
      default: 'pending'
    },
     totalPrice : {
        type : Number,
        required : true,
    },
    
  }],
  wishlist: [{
    type: String,
    required: true
  }]
}, { validateBeforeSave : false});

const Users = models?.User || model('User', userSchema);

export default Users;
