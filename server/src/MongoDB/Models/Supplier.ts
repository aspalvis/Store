import mongoose, { Document, Schema, Model } from "mongoose";

interface ISupplier extends Document {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone: string;
}

const supplierSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Supplier: Model<ISupplier> = mongoose.model<ISupplier>(
  "Supplier",
  supplierSchema
);

export default Supplier;
