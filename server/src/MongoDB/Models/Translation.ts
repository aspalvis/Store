import mongoose from "../Connection";

interface ITranslation extends mongoose.Document {
  key: string;
  values: Record<string, string>;
}

const translationSchema: mongoose.Schema = new mongoose.Schema(
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

const Translation: mongoose.Model<ITranslation> = mongoose.model<ITranslation>(
  "Translation",
  translationSchema
);

export default Translation;
