import mongoose, { Document, Schema, Model } from "mongoose";

interface IProject extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  teamMembers: string[];
}

const projectSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["planning", "inProgress", "completed", "cancelled"],
      required: true,
    },
    teamMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> = mongoose.model<IProject>(
  "Project",
  projectSchema
);

export default Project;
