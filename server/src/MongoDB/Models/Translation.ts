import { db } from "../Connection";

interface ITranslation extends db.Document {
  key: string;
  values: Record<string, string>;
}

const translationSchema: db.Schema = new db.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    values: {
      type: Map,
      of: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Translation: db.Model<ITranslation> = db.model<ITranslation>(
  "Translation",
  translationSchema
);

export default Translation;
