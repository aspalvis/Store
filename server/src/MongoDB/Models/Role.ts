import { Document, Schema, model } from "mongoose";

interface IPermission {
  name: string;
  description: string;
}

interface IRole extends Document {
  name: string;
  description: string;
  permissions: IPermission[];
}

const permissionSchema = new Schema<IPermission>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const roleSchema = new Schema<IRole>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  permissions: [{ type: permissionSchema }],
});

export const Role = model<IRole>("Role", roleSchema);
