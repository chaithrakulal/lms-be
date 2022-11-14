import { IUser, NewUserParams, UpdateUserParams } from "./userInterface";
import User from "./userModel";

export class UsersService {
  async getUserData() {
    try {
      let matchQuery = {};
      let fetchData = await User.getUserData(matchQuery);
      return fetchData;
    } catch (error) {
      throw error;
    }
  }
  async addUserData(newData: NewUserParams) {
    try {
      let saveData = await User.addUserData(newData);
      return saveData;
    } catch (error) {
      throw error;
    }
  }
  async updateUserData(userId: IUser["_id"], updatedData: UpdateUserParams) {
    let modifiedData = await User.updateUserData(userId, updatedData);
    return modifiedData;
  }
  async deleteUserData(userId: IUser["_id"]) {
    let modifiedData = await User.deleteUserDataById(userId);
    return modifiedData;
  }
}
