import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./userModel";
import { Product } from "./productModel";
import mongoose from "mongoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class ProductCount {
  @prop({ ref: () => Product })
  product!: Ref<Product>;

  @prop()
  quantity!: number;
}
export class Order extends TimeStamps{
  @prop({ ref: () => User, required: true })
  user!: Ref<User>;

  @prop({ _id: false, type: () => [ProductCount] })
  products?: mongoose.Types.Array<ProductCount>;

  @prop({ required: true })
  orderedAt!: Date;

  @prop()
  shippingAddress?: string;

  @prop()
  amount!: number;
}

export const OrderModel = getModelForClass(Order);
