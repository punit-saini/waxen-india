import { Schema, model , models } from "mongoose";

const orderSchema = new Schema({
    name : String,
    number : Number,
    pincode : Number,
    house : String,
    area : String,
    orderItems : String,
    totalPrice : Number,     
});
  
  const Orders = models.Orders || model('Orders', orderSchema);
  
  export default Orders;