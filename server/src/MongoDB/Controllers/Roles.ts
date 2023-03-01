import { IRole, Role } from "../Models/Role";

export class RolesController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    try {
      const roles = await Role.find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 });
      return roles;
    } catch (error) {
      return error;
    }
  };
  create = async (params: IRole) => {
    try {
      const role = new Role(params);
      const response = await role.save();
      return response;
    } catch (error) {
      return error;
    }
  };
  fetch = async () => {
    try {
      const roles = await Role.find();
      return roles;
    } catch (error) {
      return error;
    }
  };
  updateById = async (id: string, params: IRole) => {
    try {
      const role = await Role.findByIdAndUpdate(id, params, {
        new: true,
        runValidators: true,
      });
      // if (!role) {
      //   return "Role not found";
      // }
      return role;
    } catch (error) {
      return error;
    }
  };
}
