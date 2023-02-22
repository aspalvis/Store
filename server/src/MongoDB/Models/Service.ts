import mongoose, { Document, Schema, Model } from "mongoose";

interface IService extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  providerId: string;
}

const serviceSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service: Model<IService> = mongoose.model<IService>(
  "Service",
  serviceSchema
);

export default Service;
