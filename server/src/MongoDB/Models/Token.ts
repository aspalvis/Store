import { db } from "../Connection";

interface IToken extends db.Document {
  token: string;
  expires: Date;
  userId: string;
  type: string;
}

const tokenSchema: db.Schema = new db.Schema(
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

const Token: db.Model<IToken> = db.model<IToken>("Token", tokenSchema);

export default Token;
