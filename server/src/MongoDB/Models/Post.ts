import mongoose from "../Connection";

interface IPost extends mongoose.Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  tags: string[];
  comments: {
    author: mongoose.Schema.Types.ObjectId;
    content: string;
    postedAt: Date;
  }[];
}

const postSchema: mongoose.Schema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
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

const Post: mongoose.Model<IPost> = mongoose.model<IPost>("Post", postSchema);

export default Post;
