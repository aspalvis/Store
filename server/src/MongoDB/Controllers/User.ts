import User, { IUser } from "../Models/User";

export class UsersController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    const users = await User.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .sort({ name: 1 })
      .select("-password");
    return users;
  };
  create = async (params: IUser) => {
    const user = new User(params);
    const response = await user.save();

    return response;
  };
  fetch = async () => {
    const users = await User.find().select("-password");
    return users;
  };
  updateById = async (id: string, params: IUser) => {
    const user = await User.findByIdAndUpdate(id, params, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!user) {
      return "User not found";
    }
    return user;
  };
}
