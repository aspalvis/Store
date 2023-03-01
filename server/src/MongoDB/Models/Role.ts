import mongoose from "../Connection";

interface IPermission {
  name: string;
  description: string;
}

export interface IRole extends mongoose.Document {
  name: string;
  description: string;
  permissions: IPermission[];
}

const roleSchema = new mongoose.Schema<IRole>({
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
    { type: mongoose.Schema.Types.ObjectId, ref: "Permission", required: true },
  ],
});

export const Role = mongoose.model<IRole>("Role", roleSchema);
