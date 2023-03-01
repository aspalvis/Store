import User, { IUser } from "../Models/User";

export class UsersController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    try {
      const users = await User.find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select("-password");
      return users;
    } catch (error) {
      return error;
    }
  };
  create = async (params: IUser) => {
    try {
      const user = new User(params);
      const response = await user.save();

      return response;
    } catch (error) {
      return error;
    }
  };
  fetch = async () => {
    try {
      const users = await User.find().select("-password");
      return users;
    } catch (error) {
      return error;
    }
  };
  updateById = async (id: string, params: IUser) => {
    try {
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
    }
  };
}
