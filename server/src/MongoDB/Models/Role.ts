import { Document, Schema, model } from "mongoose";

interface IPermission {
  name: string;
  description: string;
}

export interface IRole extends Document {
  name: string;
  description: string;
  permissions: IPermission[];
}

const roleSchema = new Schema<IRole>({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: [
      "user",
      "manager",
      "contentManager",
      "customer",
      "moderator",
      "admin",
      "owner",
    ],
  },
  description: { type: String, required: true },
  permissions: [
    { type: Schema.Types.ObjectId, ref: "Permission", required: true },
  ],
});

export const Role = model<IRole>("Role", roleSchema);
