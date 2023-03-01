import mongoose from "../Connection";

interface IPartner extends mongoose.Document {
  name: string;
  description: string;
  website: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const partnerSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
      unique: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner: mongoose.Model<IPartner> = mongoose.model<IPartner>(
  "Partner",
  partnerSchema
);

export default Partner;
