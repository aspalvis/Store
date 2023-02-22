import mongoose, { Document, Schema, Model } from "mongoose";

interface ICalendarEvent extends Document {
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
}

const calendarEventSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CalendarEvent: Model<ICalendarEvent> = mongoose.model<ICalendarEvent>(
  "CalendarEvent",
  calendarEventSchema
);

export default CalendarEvent;
