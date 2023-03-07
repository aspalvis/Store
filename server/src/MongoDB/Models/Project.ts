import { db } from "../Connection";

interface IProject extends db.Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  teamMembers: string[];
}

const projectSchema: db.Schema = new db.Schema(
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
        type: db.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project: db.Model<IProject> = db.model<IProject>(
  "Project",
  projectSchema
);

export default Project;
