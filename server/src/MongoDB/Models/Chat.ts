import { db } from "../Connection";

interface IMessage extends db.Document {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IChat extends db.Document {
  members: string[];
  messages: IMessage[];
}

const messageSchema: db.Schema = new db.Schema({
  senderId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const chatSchema: db.Schema = new db.Schema(
  {
    members: {
      type: [String],
      required: true,
    },
    messages: {
      type: [messageSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Chat: db.Model<IChat> = db.model<IChat>("Chat", chatSchema);

export default Chat;
