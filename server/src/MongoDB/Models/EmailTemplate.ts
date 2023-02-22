import mongoose, { Document, Schema, Model } from "mongoose";

interface IEmailTemplate extends Document {
  name: string;
  subject: string;
  body: string;
}

const emailTemplateSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmailTemplate: Model<IEmailTemplate> = mongoose.model<IEmailTemplate>(
  "EmailTemplate",
  emailTemplateSchema
);

export default EmailTemplate;
