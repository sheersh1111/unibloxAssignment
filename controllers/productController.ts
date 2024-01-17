import { catchAsyncErrors } from "../middleware/catchAsyncErrors";
import { ProductModel } from "../models/productModel";


export const createProduct = catchAsyncErrors(async (req:any, res:any) => {

    const product = await ProductModel.create(req.body);
    return res.status(201).json({
        success: true,
        product
    });
});