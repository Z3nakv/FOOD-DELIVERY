import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userModel.findOne({ email });
        const adminUser = await userModel.findOne( {email:'Admin@gmail.com'} )
        
        if( !user ){
            return res.status(400).json({ success:false, message: "User doesnt exists"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if( !isMatch ){
            return res.status(400).json({success:false, message:"Invalid credential"})
        }

        const token = createToken( user._id );
        const userToken = user._id.equals(adminUser._id) ? 'Admin' : null;
        
        res.status(200).json({ success:true, token, userToken })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success:false, message:"Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if(exists){
            //checking if user already exists
            return res.status(400).json({success:true, message:"User already exists"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.status(400).json({success:false, message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            password:hashedPassword,
            email:email
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({success:true, token});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message: "Error"})
    }
}

export { loginUser, registerUser };