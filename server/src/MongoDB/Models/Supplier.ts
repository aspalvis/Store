import { db } from "../Connection";

interface ISupplier extends db.Document {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone: string;
}

const supplierSchema: db.Schema = new db.Schema(
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

const Supplier: db.Model<ISupplier> = db.model<ISupplier>(
  "Supplier",
  supplierSchema
);

export default Supplier;
