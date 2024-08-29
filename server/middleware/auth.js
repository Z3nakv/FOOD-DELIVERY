import jwt from 'jsonwebtoken';

const authMiddleware = async ( req, res, next ) => {

    const { token } = req.headers;
    if( !token ){
        res.status(400).json({ success:false, message: "Not Authorized, Log Again"})
    }
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message:"Error"})
    }
}

export default authMiddleware;