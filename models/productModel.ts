// src/models/UserModel.ts
import { prop, getModelForClass } from "@typegoose/typegoose";

export class Product {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  description?: string;

  @prop()
  category?: string;

  @prop()
  price!: number;

  @prop()
  stock!: number;
}

export const ProductModel = getModelForClass(Product);
