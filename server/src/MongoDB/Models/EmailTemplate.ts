import { db } from "../Connection";

interface IEmailTemplate extends db.Document {
  name: string;
  subject: string;
  body: string;
}

const emailTemplateSchema: db.Schema = new db.Schema(
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

const EmailTemplate: db.Model<IEmailTemplate> = db.model<IEmailTemplate>(
  "EmailTemplate",
  emailTemplateSchema
);

export default EmailTemplate;
