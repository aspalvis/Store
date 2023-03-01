import mongoose from "../Connection";

interface IRefreshToken extends mongoose.Document {
  userId: String;
  refreshToken: string;
  accessToken: string;
  prevTokens: string[];
  expires: number;
}

const refreshTokenSchema = new mongoose.Schema<IRefreshToken>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: { type: String, required: true },
  accessToken: { type: String, required: true },
  prevTokens: { type: [String], required: false, default: [] },
  expires: { type: Number, required: true },
});

export const RefreshToken = mongoose.model<IRefreshToken>(
  "RefreshToken",
  refreshTokenSchema
);
