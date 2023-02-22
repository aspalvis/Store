import mongoose, { Document, Schema, Model } from "mongoose";

interface IPayment extends Document {
  orderId: string;
  amount: number;
  paymentMethod: string;
  status: string;
}

const paymentSchema: Schema = new mongoose.Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Payment: Model<IPayment> = mongoose.model<IPayment>(
  "Payment",
  paymentSchema
);

export default Payment;
