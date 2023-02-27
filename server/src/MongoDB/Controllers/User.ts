import { connection } from "mongoose";
import { db } from "../Connection";
import User, { IUser } from "../Models/User";

export class UsersController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    try {
      await db.Connect();
      const users = await User.find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select("-password");
      return users;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  create = async (params: IUser) => {
    try {
      await db.Connect();
      const user = new User(params);
      const response = await user.save();
      return response;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  fetch = async () => {
    try {
      await db.Connect();
      const users = await User.find().select("-password");
      return users;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  updateById = async (id: string, params: IUser) => {
    try {
      await db.Connect();
      const user = await User.findByIdAndUpdate(id, params, {
        new: true,
        runValidators: true,
      }).select("-password");
      if (!user) {
        return "User not found";
      }
      return user;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  async close() {
    await connection.close();
  }
}
