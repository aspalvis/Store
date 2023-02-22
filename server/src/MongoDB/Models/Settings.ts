import mongoose, { Document, Schema, Model } from "mongoose";

interface ISettings extends Document {
  name: string;
  value: string;
}

const settingsSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Settings: Model<ISettings> = mongoose.model<ISettings>(
  "Settings",
  settingsSchema
);

export default Settings;
