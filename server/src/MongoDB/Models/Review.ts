import { db } from "../Connection";

interface IReview extends db.Document {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}

const reviewSchema: db.Schema = new db.Schema(
  {
    userId: {
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: db.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review: db.Model<IReview> = db.model<IReview>("Review", reviewSchema);

export default Review;
