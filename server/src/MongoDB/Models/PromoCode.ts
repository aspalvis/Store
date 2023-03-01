import mongoose from "../Connection";

interface IPromoCode extends mongoose.Document {
  code: string;
  discount: number;
  expiresAt: Date;
}

const promoCodeSchema: mongoose.Schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PromoCode: mongoose.Model<IPromoCode> = mongoose.model<IPromoCode>(
  "PromoCode",
  promoCodeSchema
);

export default PromoCode;
