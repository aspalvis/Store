import { db } from "../Connection";

interface IContract extends db.Document {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  value: number;
  status: string;
  parties: string[];
}

const contractSchema: db.Schema = new db.Schema(
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
        type: db.Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Contract: db.Model<IContract> = db.model<IContract>(
  "Contract",
  contractSchema
);

export default Contract;
