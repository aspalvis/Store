import mongoose, { Document, Schema, Model } from "mongoose";

interface IMessage {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IConversation extends Document {
  participants: string[];
  messages: IMessage[];
}

const conversationSchema: Schema = new mongoose.Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        senderId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          required: true,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation: Model<IConversation> = mongoose.model<IConversation>(
  "Conversation",
  conversationSchema
);

export default Conversation;
