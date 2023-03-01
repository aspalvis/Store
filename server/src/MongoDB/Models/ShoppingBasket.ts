import mongoose from "../Connection";

interface IShoppingBasket extends mongoose.Document {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

const shoppingBasketSchema: mongoose.Schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
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

const ShoppingBasket: mongoose.Model<IShoppingBasket> =
  mongoose.model<IShoppingBasket>("ShoppingBasket", shoppingBasketSchema);

export default ShoppingBasket;
