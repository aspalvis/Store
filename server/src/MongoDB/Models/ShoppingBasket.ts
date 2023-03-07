import { db } from "../Connection";

interface IShoppingBasket extends db.Document {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

const shoppingBasketSchema: db.Schema = new db.Schema(
  {
    userId: {
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: db.Schema.Types.ObjectId,
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

const ShoppingBasket: db.Model<IShoppingBasket> = db.model<IShoppingBasket>(
  "ShoppingBasket",
  shoppingBasketSchema
);

export default ShoppingBasket;
