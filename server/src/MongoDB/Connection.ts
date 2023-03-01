import config from "config";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect((config.get("mongodb.uri") as string) + config.get("mongodb.dbname"))
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

export default mongoose;
