import { MongoClient } from "mongodb";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let database;

export const connectToDatabase = async() => {
    try {
        await client.connect();
        console.log("connected to mongodb");
        database = client.db();
    } catch (error) {
        console.log(error);
    }
}

export const getDB = () =>{
    return database;
}
