import { UserModel } from "../models/userModel";
import { sendToken } from "../utils/jwtToken";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors";
export const registerUser = catchAsyncErrors(async (req:any, res:any, next:any) => {

    const { name, email, password,phoneNumber } = req.body;

    const user = await UserModel.create({
        name,
        email,
        password,
        phoneNumber
    });
    sendToken(user, 201, res);
})

export const loginUser = async(req:any, res:any,next:any) => {
    const { email, password } = req.body;
    //checking if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & Password", 400));
    }
   const user=  await UserModel.findOne({ email: req.body.email })
        if (user) {
            if (password!==user.password) {
                return next(new ErrorHandler("Invalid Emailid or Password", 401));
            }
            sendToken(user, 200, res);
        }
        else {
            return next(new ErrorHandler("Invalid Email or password"),400);
        }
    
};

export const logout = catchAsyncErrors(async (req:any, res:any, next:any) => {
    res.cookie("token", null, {
        expiresIn: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged Out"
    });
});