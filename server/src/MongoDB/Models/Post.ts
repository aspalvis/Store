import { db } from "../Connection";

interface IPost extends db.Document {
  title: string;
  content: string;
  author: db.Schema.Types.ObjectId;
  tags: string[];
  comments: {
    author: db.Schema.Types.ObjectId;
    content: string;
    postedAt: Date;
  }[];
}

const postSchema: db.Schema = new db.Schema(
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
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
    comments: [
      {
        author: {
          type: db.Schema.Types.ObjectId,
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

const Post: db.Model<IPost> = db.model<IPost>("Post", postSchema);

export default Post;
