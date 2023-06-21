import "dotenv/config";
import express from "express";
import { ObjectId } from "mongodb";
import { getDB } from "../Mongo excercise/db/mongo.connections.js";
import { connectToDatabase } from "../Mongo excercise/db/mongo.connections.js";

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection("products").find({}).toArray();
    res.status(200).send(products); 
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
});

app.get("/products/:id", async(req,res)=>{
    try {
        const db = getDB();
        const productsCollection = await db.collection("products");
        const product = await productsCollection.findOne({_id: new ObjectId(req.params.id)});
        if(!product) throw new Error("Product not found")
        return res.json(product);
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: error.message });
    }
})

app.post("/products",async(req,res)=>{
    try {
        const db = getDB();
        const productsCollection = await db.collection("products");
        const addedProduct = await productsCollection.insertOne(req.body);
        return res.status(201).send({
            msg: `Product with ${addedProduct.insertedId} was added.`,
          });
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message });
    }
});

app.patch("/products/:id", async (req, res) => {
    try {
      const db = getDB();
      const productsCollection = await db.collection("products");
      const updatedProduct = await productsCollection.findOneAndUpdate(
        {
          _id: new ObjectId(req.params.id),
        },
        {
          $set: req.body,
        },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedProduct.value);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  });

app.delete("/products/:id",async(req,res)=>{
    try {
        const db = getDB();
        const productsCollection = await db.collection("products");
        const results = await productsCollection.deleteOne({
            _id: new ObjectId(req.params.id),
        })
        if (results.deletedCount === 0) {
            throw new Error("Product not found");
          }
          res.status(200).send("Product deleted successfully");
    
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
})

app.delete("/products", async (req, res) => {
    try {
      const db = getDB();
      const productCollection = db.collection("products");
      const result = await productCollection.deleteMany({});
      res.status(200).send(`${result.deletedCount} documents deleted`);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  });
app.listen(4000, () => {
  connectToDatabase();
  console.log("Server is up at port 4000");
});
