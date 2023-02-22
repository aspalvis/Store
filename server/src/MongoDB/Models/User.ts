import mongoose, { Document, Schema, Model } from "mongoose";

interface IPermissions {
  permission: string;
  isAllowed: boolean;
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  roleId?: string;
  token?: string;
  tokenExpire?: Date;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod?: string;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvc?: string;
  permissions?: IPermissions[];
}

const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    roleId: {
      type: String,
    },
    token: {
      type: String,
    },
    tokenExpire: {
      type: Date,
    },
    shippingAddress: {
      fullName: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    paymentMethod: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    cardName: {
      type: String,
    },
    cardExpiry: {
      type: String,
    },
    cardCvc: {
      type: String,
    },
    permissions: [
      {
        permission: {
          type: String,
          required: true,
        },
        isAllowed: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
