import { MongoClient } from "mongodb";

class Database {

  static connection = null;

  static getConnection() {
    if (!this.connection) {
      this.connection = new MongoClient("mongodb://localhost:27018")
      .db("locomotive");
    }
    return this.connection;
  }
}

export { Database };