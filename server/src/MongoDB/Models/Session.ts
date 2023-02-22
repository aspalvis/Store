import mongoose, { Document, Schema, Model } from "mongoose";

interface ISession extends Document {
  sessionId: string;
  expires: Date;
  data: {
    [key: string]: any;
  };
}

const sessionSchema: Schema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session: Model<ISession> = mongoose.model<ISession>(
  "Session",
  sessionSchema
);

export default Session;
