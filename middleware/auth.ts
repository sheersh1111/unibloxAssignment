const jwt = require("jsonwebtoken");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
import { UserModel as User } from "../models/userModel";
import { ErrorHandler } from "../utils/errorHandler";

exports.isAuthenticatedUser = catchAsyncErrors( async(req:any,res:any,next:any)=>{
    const {token}= req.cookies;

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Please Login to access resource"
        });
    }
    const decodedData= jwt.verify(token,process.env.JWT_SECRET);
    // console.log(decodedData);
    req.user =await User.findById(decodedData.id);
    next();
});
exports.authorizeRoles= (...roles:string[])=>{
    return (req:any,res:any,next:any)=>{
        if (!roles.includes(req.user.role)){
            return next (new ErrorHandler(
                `Role: ${req.user.role} is not allowed to access this resource`,
                403
            ));
        }
        next();
    }
}