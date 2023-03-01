import mongoose from "../Connection";

interface ISettings extends mongoose.Document {
  name: string;
  value: string;
}

const settingsSchema: mongoose.Schema = new mongoose.Schema(
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

const Settings: mongoose.Model<ISettings> = mongoose.model<ISettings>(
  "Settings",
  settingsSchema
);

export default Settings;
