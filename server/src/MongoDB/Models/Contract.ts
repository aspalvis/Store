import mongoose, { Document, Schema, Model } from "mongoose";

interface IContract extends Document {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  value: number;
  status: string;
  parties: string[];
}

const contractSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "active", "completed", "terminated"],
      required: true,
    },
    parties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Contract: Model<IContract> = mongoose.model<IContract>(
  "Contract",
  contractSchema
);

export default Contract;
