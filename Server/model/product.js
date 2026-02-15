// import { getDb } from "../config/db.config.js";
// import { ObjectId } from "mongodb";
// class Product {
//   constructor({name, price,description}) {
//     if (!name) throw new Error("product name is required");
//     if (!price) throw new Error("product price is required");
//     if (!description) throw new Error("product description is required");

//     ((this.name = name),
//       (this.description = description || ""),
//       (this.price = price),
//       (this.createdAt = Date.now()));
//   }

//   static async create(productData) {
//     const db = getDb();
//     const product = new Product(productData); // this will send the   data to the constructor
//     const result = await db.collection("products").insertOne(product);
//     return { _id: result.insertedId, ...product };
//   }

//   static async getAll() {
//     const db = getDb();
//     return await db.collection("products").find().toArray();
//   }
//   static async getById(productId) {
//     const db = getDb();
//     return await db.collection("products").findOne({
//       _id: new ObjectId(productId),
//     });
//   }
//   static async updateById(productId, updateData) {
//     const db = getDb();
//     await db
//       .collection("products")
//       .updateOne({ _id: new ObjectId(productId) }, { $set: updateData });
//     return this.getById(productId);
//   }
//   static async delete(productId) {
//     const db = getDb();
//     return await db.collection("products").deleteOne({
//       _id: new ObjectId(productId),
//     });
//   }
// }

// export default Product;
