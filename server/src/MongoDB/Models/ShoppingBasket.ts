import mongoose, { Document, Schema, Model } from "mongoose";

interface IShoppingBasket extends Document {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

const shoppingBasketSchema: Schema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ShoppingBasket: Model<IShoppingBasket> = mongoose.model<IShoppingBasket>(
  "ShoppingBasket",
  shoppingBasketSchema
);

export default ShoppingBasket;
