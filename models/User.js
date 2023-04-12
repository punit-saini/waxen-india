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
  wishlist: [{
    type: String,
    required: true
  }]
});

const Users = models?.User || model('User', userSchema);

export default Users;
