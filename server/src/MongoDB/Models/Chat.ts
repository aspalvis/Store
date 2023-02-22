import mongoose, { Document, Schema, Model } from "mongoose";

interface IMessage extends Document {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IChat extends Document {
  members: string[];
  messages: IMessage[];
}

const messageSchema: Schema = new mongoose.Schema({
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

const chatSchema: Schema = new mongoose.Schema(
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

const Chat: Model<IChat> = mongoose.model<IChat>("Chat", chatSchema);

export default Chat;
