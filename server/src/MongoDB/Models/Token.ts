import mongoose, { Document, Schema, Model } from "mongoose";

interface IToken extends Document {
  token: string;
  expires: Date;
  userId: string;
  type: string;
}

const tokenSchema: Schema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["access", "refresh"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token: Model<IToken> = mongoose.model<IToken>("Token", tokenSchema);

export default Token;
