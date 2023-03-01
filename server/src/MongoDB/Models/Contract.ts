import mongoose from "../Connection";

interface IContract extends mongoose.Document {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  value: number;
  status: string;
  parties: string[];
}

const contractSchema: mongoose.Schema = new mongoose.Schema(
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Contract: mongoose.Model<IContract> = mongoose.model<IContract>(
  "Contract",
  contractSchema
);

export default Contract;
