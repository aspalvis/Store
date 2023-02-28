import { Document, Schema, model } from "mongoose";

interface IRefreshToken extends Document {
  userId: String;
  refreshToken: string;
  accessToken: string;
  prevTokens: string[];
  expires: number;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: { type: String, required: true },
  accessToken: { type: String, required: true },
  prevTokens: { type: [String], required: false, default: [] },
  expires: { type: Number, required: true },
});

export const RefreshToken = model<IRefreshToken>(
  "RefreshToken",
  refreshTokenSchema
);
