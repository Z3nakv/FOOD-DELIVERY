import OrderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
const placeOrder = async (req, res) => {
    
    const frontend_url = "https://food-delivery-frontend-vq0w.onrender.com";
    
    try {
        const newOrder = new OrderModel({
            userId: req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});

        const line_items = req.body.items.map((item) => ({
            price_data:{
                currency:"usd",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"Delivery charges"
                },
                unit_amount:2*100
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.status(200).json({ success:true, session_url:session.url });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if( success==="true" ){
            await OrderModel.findByIdAndUpdate(orderId, {payment:true})
            res.json({success:true, message:"Paid"})
        }else{
            await OrderModel.findOneAndDelete(orderId);
            res.status(200).json({ success:false, message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" })
    } 
}

//user orders for frontend

const userOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({userId:req.body.userId});
        res.status(200).json({ success:true, data:orders });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" });
    }
}

//listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({});
        res.status(200).json({ success:true, data: orders })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" })
    }
}

//api for updating order status
const updateStatus = async (req, res) => {
    try {
        const response = await OrderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.status(200).json({ success:true, message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" })
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus }
