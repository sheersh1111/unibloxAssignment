// src/models/UserModel.ts
import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  email!: string;

  @prop({required:true})
  phoneNumber!:number;

  @prop()
  age?: number;
}

export const UserModel = getModelForClass(User);
