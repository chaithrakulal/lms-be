import mongoose, { model, Schema } from "mongoose";
import { isNumberObject } from "util/types";
import { IUser, IUserModel } from "./userInterface";

const UserSchema: Schema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.statics = {
  getUserData: async function (matchQuery = {}) {
    try {
      const fetchData: Array<IUser> = await this.find(matchQuery);
      return fetchData;
    } catch (error) {
      throw error;
    }
  },
  addUserData: async function (newData) {
    try {
      const data: IUser = new User(newData);
      const response = await data.save();
      return response;
    } catch (error) {
      throw error;
    }
  },
  updateUserData: async function (userId, updatedData) {
    try {
      const modifiedData: IUser = await this.findByIdAndUpdate(userId, {
        $set: updatedData,
      });
      return modifiedData;
    } catch (error) {
      throw error;
    }
  },
  deleteUserDataById: async function (userId) {
    try {
      const response: IUser = await this.findByIdAndRemove(userId);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
const User = model<IUser, IUserModel>("Users", UserSchema);
export default User;
