import { Session } from "../../Middleware/Auth/Models/Session";
import mongoose from "../Connection";
import { RefreshToken } from "./RefreshToken";

interface IPermissions {
  permission: string;
  isAllowed: boolean;
}

// export interface IUser extends Document {
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

  roleId: string;

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
  generateSession: () => Promise<Session>;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (email: string) {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },
        message: "Email format is not correct",
      },
    },
    password: {
      type: String,
      required: true,
    },

    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
      default: "user",
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
      uppercase: true,
      get: (v: any) => v.toUpperCase(),
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateSession = async function () {
  const session = new Session({ _roleId: this.roleId, _id: this._id });
  const refresh = new RefreshToken({
    refreshToken: session.refreshToken,
    accessToken: session.accessToken,
    userId: session._id,
    expires: session.refreshExp,
  });
  await refresh.save();
  return session;
};

const User: mongoose.Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
