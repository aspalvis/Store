import mongoose from "../Connection";

interface IProject extends mongoose.Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  teamMembers: string[];
}

const projectSchema: mongoose.Schema = new mongoose.Schema(
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project: mongoose.Model<IProject> = mongoose.model<IProject>(
  "Project",
  projectSchema
);

export default Project;
