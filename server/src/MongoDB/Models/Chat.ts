import mongoose from "../Connection";

interface IMessage extends mongoose.Document {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IChat extends mongoose.Document {
  members: string[];
  messages: IMessage[];
}

const messageSchema: mongoose.Schema = new mongoose.Schema({
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

const chatSchema: mongoose.Schema = new mongoose.Schema(
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

const Chat: mongoose.Model<IChat> = mongoose.model<IChat>("Chat", chatSchema);

export default Chat;
