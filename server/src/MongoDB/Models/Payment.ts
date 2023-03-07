import { db } from "../Connection";

interface IPayment extends db.Document {
  orderId: string;
  amount: number;
  paymentMethod: string;
  status: string;
}

const paymentSchema: db.Schema = new db.Schema(
  {
    orderId: {
      type: db.Schema.Types.ObjectId,
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

const Payment: db.Model<IPayment> = db.model<IPayment>(
  "Payment",
  paymentSchema
);

export default Payment;
