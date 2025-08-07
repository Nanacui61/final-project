//Written by Yuqian Cui
// connect to MongoDB

import { MongoClient, Db, Collection } from "mongodb";

// Load MongoDB connection URI from environment variable
const MONGO_URI = process.env.MONGODB_URI as string;
if (!MONGO_URI) {
    throw new Error("MONGODB_URI environment variable is undefined");
}

// Define database and collection names
const DB_NAME = "treasure_hunt";
export const RECORDS_COLLECTION = "game_records";

// Reuse connection across requests
let client: MongoClient | null = null;
let db: Db | null = null;

// Establish connection to the MongoDB server
async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI); // create new client if not already connected
        await client.connect();              // connect to MongoDB
    }
    return client.db(DB_NAME);               // return the database instance
}

// Get a specific collection from the database
export default async function getCollection(
    collectionName: string
): Promise<Collection> {
    if (!db) {
        db = await connect();                // connect if not already connected
    }
    return db.collection(collectionName);    // return the requested collection
}
