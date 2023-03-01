import mongoose from "../Connection";

interface IEmailTemplate extends mongoose.Document {
  name: string;
  subject: string;
  body: string;
}

const emailTemplateSchema: mongoose.Schema = new mongoose.Schema(
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

const EmailTemplate: mongoose.Model<IEmailTemplate> =
  mongoose.model<IEmailTemplate>("EmailTemplate", emailTemplateSchema);

export default EmailTemplate;
