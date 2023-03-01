import mongoose from "../Connection";

interface IService extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  providerId: string;
}

const serviceSchema: mongoose.Schema = new mongoose.Schema(
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

const Service: mongoose.Model<IService> = mongoose.model<IService>(
  "Service",
  serviceSchema
);

export default Service;
