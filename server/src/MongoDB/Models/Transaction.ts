import mongoose, { Document, Schema, Model } from "mongoose";

interface ITransaction extends Document {
  userId: string;
  orderId: string;
  amount: number;
  status: string;
}

const transactionSchema: Schema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export default Transaction;
