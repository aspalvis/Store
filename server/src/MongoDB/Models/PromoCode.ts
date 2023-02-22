import mongoose, { Document, Schema, Model } from "mongoose";

interface IPromoCode extends Document {
  code: string;
  discount: number;
  expiresAt: Date;
}

const promoCodeSchema: Schema = new mongoose.Schema(
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

const PromoCode: Model<IPromoCode> = mongoose.model<IPromoCode>(
  "PromoCode",
  promoCodeSchema
);

export default PromoCode;
