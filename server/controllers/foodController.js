import { foodModel } from "../models/foodModel.js";
import fs from 'fs';

//add food item
const addFood = async (req, res) => {
console.log(req);

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.status(201).json({ success: true, message: "Food added!"})
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, message: "Error"})
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.status(200).json({ success:true, data:food});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message:"Error"});
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({success:true, message:"Food removed"});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message:"Error"})
    }
}

export { addFood, listFood, removeFood }