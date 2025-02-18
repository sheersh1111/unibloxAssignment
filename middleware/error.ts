import { ErrorHandler } from "../utils/errorHandler";
module.exports=(err:any,req:any,res:any,next:any)=>{

    err.statusCode=err.statusCode||500;
    err.message=err.message||"Internal server error";

// wrong mongo db Id error
if(err.name==="CastError"){
    const message=`Resource not found .Invalid : ${err.path}`;
    err=new ErrorHandler(message,400);
}  
//mongoose duplicate key error
if(err.code===11000){
    const message=`Duplicate ${Object.keys(err.keyValue)}Entered`;
    err=new ErrorHandler(message,400);
}

if(err.name==="JsonWebTokenError"){
    const message=`Json Web Token is Invalid try Again`;
    err=new ErrorHandler(message,400);
}

if(err.name==="TokenExpiredError"){
    const message=`Json Web Token is Expired try Again`;
    err=new ErrorHandler(message,400);
}
  
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};