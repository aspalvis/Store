import { db } from "../Connection";

interface ITransaction extends db.Document {
  userId: string;
  orderId: string;
  amount: number;
  status: string;
}

const transactionSchema: db.Schema = new db.Schema(
  {
    userId: {
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: db.Schema.Types.ObjectId,
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

const Transaction: db.Model<ITransaction> = db.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export default Transaction;
