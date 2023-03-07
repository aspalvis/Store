import { db } from "../Connection";

interface IPermission extends db.Document {
  name: string;
  description: string;
}

const permissionSchema: db.Schema = new db.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Permission: db.Model<IPermission> = db.model<IPermission>(
  "Permission",
  permissionSchema
);

export default Permission;
