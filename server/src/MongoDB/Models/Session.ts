import mongoose from "../Connection";

interface ISession extends mongoose.Document {
  sessionId: string;
  expires: Date;
  data: {
    [key: string]: any;
  };
}

const sessionSchema: mongoose.Schema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session: mongoose.Model<ISession> = mongoose.model<ISession>(
  "Session",
  sessionSchema
);

export default Session;
