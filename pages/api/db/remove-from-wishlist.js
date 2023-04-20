import Users from "@/models/User";

export default async function(req,res){
    const {productId, userId} = req.body;

    try {
        const user = await Users.findOne({email : userId});
        if(!user){
            return res.status(404).send('user not found');
        }
        user.wishlist = user.wishlist.filter((id)=> id!==productId);
        await user.save();
        res.setHeader("Location", req.headers.referer || "/")
        res.status(302).end();
    } catch (error) {
        console.log(error)
        res.redirect('/failed');
    }
}