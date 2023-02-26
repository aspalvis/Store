import { connect } from "mongoose";

export class db {
  static async Connect() {
    connect("mongodb://localhost:27017/store")
      .then(() => {
        console.log("Connection succeed");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static async Close() {}
}
