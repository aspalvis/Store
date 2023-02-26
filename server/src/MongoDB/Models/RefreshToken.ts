import { Document, Schema, model } from "mongoose";

interface IRefreshToken extends Document {
  refreshToken: string;
  accessToken: string;
  prevTokens: string[];
  userId: string;
  expires: number;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
  refreshToken: { type: String, required: true },
  accessToken: { type: String, required: true },
  prevTokens: { type: [String], required: false, default: [] },
  userId: { type: String, required: true },
  expires: { type: Number, required: true },
});

export const RefreshToken = model<IRefreshToken>(
  "RefreshToken",
  refreshTokenSchema
);
