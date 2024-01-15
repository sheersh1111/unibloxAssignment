import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Product } from "./productModel";
import mongoose from "mongoose";

class ProductCount {
  @prop({ _id: false, type: () => Product })
  product!: Product;

  @prop()
  quantity!: number;
}
export class Cart {
  @prop({ ref: () => User, required: true })
  user!: Ref<User>;

  @prop({ _id: false, type: () => [ProductCount] })
  products?: mongoose.Types.Array<ProductCount>;

  @prop()
  shippingAddress?:string;

  @prop()
  amount!:number
}

export const CartModel = getModelForClass(Cart);
