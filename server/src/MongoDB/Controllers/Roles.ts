import { connection } from "mongoose";
import { db } from "../Connection";
import { IRole, Role } from "../Models/Role";

export class RolesController {
  fetchPage = async (pageNumber: number, pageSize: number) => {
    try {
      await db.Connect();
      const roles = await Role.find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 });
      return roles;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  create = async (params: IRole) => {
    try {
      await db.Connect();
      const role = new Role(params);

      const response = await role.save();

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
      const roles = await Role.find();
      return roles;
    } catch (error) {
      return error;
    } finally {
      db.Close();
    }
  };
  updateById = async (id: string, params: IRole) => {
    try {
      await db.Connect();
      const role = await Role.findByIdAndUpdate(id, params, {
        new: true,
        runValidators: true,
      });
      if (!role) {
        return "Role not found";
      }
      return role;
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
