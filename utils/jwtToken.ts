import { ObjectId } from "mongoose";
const jwt= require("jsonwebtoken")
const getJWTToken = (id:ObjectId) =>{
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}
//creating token and saving in cookie
export const sendToken =(user:any,statusCode:number,res:any) =>{
    const token=getJWTToken(user._id);
    //options for cookie
    const options={
        expiresIn:new Date(
            Date.now() + 15*24*60*60*1000
        ),
        httpOnly:true,

    };
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token,
    });
};