import mongoose, { Document, Schema, Model } from "mongoose";

interface ITranslation extends Document {
  key: string;
  values: Record<string, string>;
}

const translationSchema: Schema = new mongoose.Schema(
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

const Translation: Model<ITranslation> = mongoose.model<ITranslation>(
  "Translation",
  translationSchema
);

export default Translation;
