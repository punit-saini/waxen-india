import Users from "@/models/User";
import cookie from "cookie";


export default async function addToWishList(req,res){

    
    const {productId, userId}= req.body
    console.log('user id is ', userId)
    if(!userId){
        res.redirect('/sign-in')
    }
    try {


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
    res.status(302).end();
    }

    } catch (error) {
        console.log(error)
        res.redirect('/failed');
    }
}