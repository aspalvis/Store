import mongoose from "../Connection";

interface IReview extends mongoose.Document {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}

const reviewSchema: mongoose.Schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
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

const Review: mongoose.Model<IReview> = mongoose.model<IReview>(
  "Review",
  reviewSchema
);

export default Review;
