import mongoose, { Document, Schema, Model } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
  tags: string[];
  comments: {
    author: Schema.Types.ObjectId;
    content: string;
    postedAt: Date;
  }[];
}

const postSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
    comments: [
      {
        author: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        postedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post: Model<IPost> = mongoose.model<IPost>("Post", postSchema);

export default Post;
