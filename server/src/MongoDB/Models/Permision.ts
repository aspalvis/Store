import mongoose, { Document, Schema, Model } from "mongoose";

interface IPermission extends Document {
  name: string;
  description: string;
}

const permissionSchema: Schema = new mongoose.Schema(
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

const Permission: Model<IPermission> = mongoose.model<IPermission>(
  "Permission",
  permissionSchema
);

export default Permission;
