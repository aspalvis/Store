import { db } from "../Connection";

interface ICalendarEvent extends db.Document {
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
}

const calendarEventSchema: db.Schema = new db.Schema(
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

const CalendarEvent: db.Model<ICalendarEvent> = db.model<ICalendarEvent>(
  "CalendarEvent",
  calendarEventSchema
);

export default CalendarEvent;
