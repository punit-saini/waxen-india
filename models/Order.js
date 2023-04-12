import { Schema, model , models } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name : {
    type : String,
    require : true,
  },
  contact : {
    type : String,
  },
  products: [
    {
      product_id: {
        type: String,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ],
  paymentMethod: {
    type: String,
  },
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String
  },
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});
  
  const Orders = models?.Orders || model('Orders', orderSchema);
  
  export default Orders;


