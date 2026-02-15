// import { MongoClient } from "mongodb";

// const DB_URI = "mongodb://localhost:27017";
// const DB_NAME = "ecommerce";
// const client = new MongoClient(DB_URI);
// let dbConnection = null;

// export const connectDb = async () => {
//   try {
//     await client.connect();
//     dbConnection = client.db(DB_NAME);
//     console.log("Mongo DB connection Successfull");
//     return dbConnection;
//   } catch (er) {
//     console.log(er);
//   }
// };
// export const getDb = () => {
//   if (!dbConnection) {
//     throw new Error("Database not connected. Call connectToServer first.");
//   }
//   return dbConnection;
// };
