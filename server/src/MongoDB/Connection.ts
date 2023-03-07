import config from "config";
import mongoose from "mongoose";

const uri =
  (config.get("mongodb.uri") as string) + config.get("mongodb.dbname");

mongoose.set("strictQuery", false);

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

export { mongoose as db };
