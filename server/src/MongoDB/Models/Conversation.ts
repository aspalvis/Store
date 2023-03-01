import mongoose from "../Connection";

interface IMessage {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IConversation extends mongoose.Document {
  participants: string[];
  messages: IMessage[];
}

const conversationSchema: mongoose.Schema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        senderId: {
          type: mongoose.Schema.Types.ObjectId,
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

const Conversation: mongoose.Model<IConversation> =
  mongoose.model<IConversation>("Conversation", conversationSchema);

export default Conversation;
