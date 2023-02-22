import mongoose, { Document, Schema, Model } from "mongoose";

interface IReview extends Document {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
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

const Review: Model<IReview> = mongoose.model<IReview>("Review", reviewSchema);

export default Review;
