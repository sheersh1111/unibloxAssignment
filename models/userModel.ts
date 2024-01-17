// src/models/UserModel.ts
import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  email!: string;

  @prop({required:true})
  phoneNumber!:string;

  @prop({required:true})
  password!:string;

  @prop()
  age?: number;

  @prop({default:'user'})
  role?: string
}

export const UserModel = getModelForClass(User);
