import { db } from "../Connection";

interface IPartner extends db.Document {
  name: string;
  description: string;
  website: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const partnerSchema: db.Schema = new db.Schema(
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

const Partner: db.Model<IPartner> = db.model<IPartner>(
  "Partner",
  partnerSchema
);

export default Partner;
