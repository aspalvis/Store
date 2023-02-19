import { MongoClient } from "mongodb";

export class Connection {
  constructor(private _dbName: string) {}
  run = async () => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri as string);
    try {
      await client.connect();
      const db = client.db(this._dbName);
      const res = await db.collection("tests").find();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  };
}
