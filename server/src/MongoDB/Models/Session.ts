import { db } from "../Connection";

interface ISession extends db.Document {
  sessionId: string;
  expires: Date;
  data: {
    [key: string]: any;
  };
}

const sessionSchema: db.Schema = new db.Schema(
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
      type: db.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session: db.Model<ISession> = db.model<ISession>(
  "Session",
  sessionSchema
);

export default Session;
