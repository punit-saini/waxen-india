import Users from "@/models/User";
import mongoose from "mongoose";

export default async function(req,res){
    const {productId, userId} = req.body;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log(`MongoDB Connected: ${conn.connection.host}`);
        const user = await Users.findOne({email : userId});
        if(!user){
            return res.status(404).send('user not found');
        }
        user.wishlist = user.wishlist.filter((id)=> id!==productId);
        await user.save();
        res.setHeader("Location", req.headers.referer || "/")
        await mongoose.connection.close();
        res.status(302).end();
    } catch (error) {
        console.log(error)
        await mongoose.connection.close();
        res.redirect('/failed');
    }
}