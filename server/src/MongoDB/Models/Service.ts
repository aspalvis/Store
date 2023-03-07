import { db } from "../Connection";

interface IService extends db.Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  providerId: string;
}

const serviceSchema: db.Schema = new db.Schema(
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

const Service: db.Model<IService> = db.model<IService>(
  "Service",
  serviceSchema
);

export default Service;
