import { db } from "../Connection";

interface ISettings extends db.Document {
  name: string;
  value: string;
}

const settingsSchema: db.Schema = new db.Schema(
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

const Settings: db.Model<ISettings> = db.model<ISettings>(
  "Settings",
  settingsSchema
);

export default Settings;
