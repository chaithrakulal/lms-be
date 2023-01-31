import { Document, Model } from "mongoose";
import { IObject } from "../../Common/interfaces/objectInterface";

export interface IUser extends Document {
  _id: any;
  userName: string;
  email: string;
  password: string;
}
export interface IUserModel extends Model<IUser> {
  getUserData(matchQuery: IObject): Promise<Array<IUser>>;
  addUserData(newData: NewUserParams): Promise<IUser>;
  updateUserData(
    userId: IUser["_id"],
    updatedData: UpdateUserParams
  ): Promise<IUser>;
  deleteUserDataById(userId: IUser["_id"]): Promise<IUser>;
}

export interface NewUserParams {
  userName: IUser["userName"];
  email: IUser["email"];
  password: IUser["password"];
}

export interface UpdateUserParams {
  userName: IUser["userName"];
  email: IUser["email"];
  password: IUser["password"];
}
