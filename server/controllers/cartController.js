import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if( !cartData[req.body.itemId] ){
            cartData[req.body.itemId] = 1;
        }else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.status(200).json({succes:true, message: "Added to cart"});
    } catch (error) {
        console.log(error);
        res.status(400).json({succes:false, message: "Error"});
    }
}

//remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.status(200).json({ success:true, message:"Removed from cart" })
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message:"Error"})
    }
}

//fetch user card data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.status(200).json({success:true, cartData});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message:"Error"});
    }
}

export { addToCart, removeFromCart, getCart };