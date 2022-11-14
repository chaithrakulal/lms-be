import express from "express";
import {
  Get,
  Route,
  Controller,
  SuccessResponse,
  Post,
  Body,
  Put,
  Path,
  Delete,
} from "tsoa";
import { NewUserParams, UpdateUserParams } from "./userInterface";
import { UsersService } from "./userService";

@Route("users")
export class UsersController extends Controller {
  @SuccessResponse("200", "fetched")
  @Get()
  public async getUserData() {
    try {
      let fetchData = await new UsersService().getUserData();
      this.setStatus(200);
      return fetchData;
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse("201", "created")
  @Post("/create")
  public async addUserData(@Body() newData: NewUserParams) {
    try {
      const userData = await new UsersService().addUserData(newData);
      this.setStatus(201);
      return userData;
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse("201", "updated")
  @Put("/{userId}")
  public async updateUserData(
    @Path() userId: string,
    @Body() userData: UpdateUserParams
  ) {
    try {
      const modifiedData = await new UsersService().updateUserData(
        userId,
        userData
      );
      this.setStatus(201);
      return modifiedData;
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse("201", "deleted")
  @Delete("/{userId}")
  public async deleteUserData(@Path() userId: string) {
    try {
      const modifiedData = await new UsersService().deleteUserData(userId);
      this.setStatus(201);
      return modifiedData;
    } catch (error) {
      throw error;
    }
  }
}
