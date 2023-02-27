import { connect, connection } from "mongoose";

export class db {
  static async Connect() {
    return connect("mongodb://localhost:27017/store").catch((err) => {
      console.log(err);
    });
  }
  static async Close() {
    return connection.close();
  }
}
