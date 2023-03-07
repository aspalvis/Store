import { db } from "../Connection";

interface IMessage {
  senderId: string;
  content: string;
  timestamp: Date;
}

interface IConversation extends db.Document {
  participants: string[];
  messages: IMessage[];
}

const conversationSchema: db.Schema = new db.Schema(
  {
    participants: [
      {
        type: db.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        senderId: {
          type: db.Schema.Types.ObjectId,
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

const Conversation: db.Model<IConversation> = db.model<IConversation>(
  "Conversation",
  conversationSchema
);

export default Conversation;
