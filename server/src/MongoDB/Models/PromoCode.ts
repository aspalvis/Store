import { db } from "../Connection";

interface IPromoCode extends db.Document {
  code: string;
  discount: number;
  expiresAt: Date;
}

const promoCodeSchema: db.Schema = new db.Schema(
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

const PromoCode: db.Model<IPromoCode> = db.model<IPromoCode>(
  "PromoCode",
  promoCodeSchema
);

export default PromoCode;
