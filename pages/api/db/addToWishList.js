import Users from "@/models/User";
import cookie from "cookie";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";


export default async function addToWishList(req,res){

    const {productId, userId}= req.body
    console.log('user id is ', userId)
    if(!userId){
        res.redirect('/sign-in')
    }
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });  
    const user = await Users.findOne({email : userId});
    if(user.wishlist.includes(productId)){
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("toastMessage", "Product already present in the Wishlist.", {
                httpOnly : true,
                sameSite : "strict",
                maxAge : 60,
            })
        )
        res.setHeader("Location", req.headers.referer || "/")
  await mongoose.connection.close();
        res.status(302).end();
    }
    else {

    user.wishlist.push(productId);
    await user.save();
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("toastMessage", "Product added to your Wishlist.", {
            httpOnly : true,
            sameSite : "strict",
            maxAge : 60,
        })
    )
    res.setHeader("Location", req.headers.referer || "/")
    await mongoose.connection.close();
    res.status(302).end();
    }

    } catch (error) {
        await client.close();
        console.log(error)
        res.redirect('/failed');
    }
}