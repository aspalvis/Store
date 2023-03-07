import { db } from "../Connection";

interface IRefreshToken extends db.Document {
  userId: String;
  refreshToken: string;
  accessToken: string;
  prevTokens: string[];
  expires: number;
}

const refreshTokenSchema = new db.Schema<IRefreshToken>({
  userId: {
    type: db.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: { type: String, required: true },
  accessToken: { type: String, required: true },
  prevTokens: { type: [String], required: false, default: [] },
  expires: { type: Number, required: true },
});

export const RefreshToken = db.model<IRefreshToken>(
  "RefreshToken",
  refreshTokenSchema
);
