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