import { db } from "../Connection";
interface IPermission {
  name: string;
  description: string;
}

export interface IRole extends db.Document {
  name: string;
  description: string;
  permissions: IPermission[];
}

const roleSchema = new db.Schema<IRole>({
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
    { type: db.Schema.Types.ObjectId, ref: "Permission", required: true },
  ],
});

export const Role = db.model<IRole>("Role", roleSchema);
