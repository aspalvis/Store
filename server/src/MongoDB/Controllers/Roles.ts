import { IRole, Role } from "../Models/Role";

export class RolesController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    const roles = await Role.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .sort({ name: 1 });
    return roles;
  };
  create = async (params: IRole) => {
    const role = new Role(params);
    const response = await role.save();
    return response;
  };
  fetch = async () => {
    const roles = await Role.find();
    return roles;
  };
  updateById = async (id: string, params: IRole) => {
    const role = await Role.findByIdAndUpdate(id, params, {
      new: true,
      runValidators: true,
    });

    return role;
  };
}
