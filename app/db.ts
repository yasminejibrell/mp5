import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is undefined")
}

const DB_NAME="cs391-url-shortener";
export const ALIASES_COLLECTION = "aliases";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://CS391URL-Shortener.com";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(
    collectionName: string,
): Promise<Collection> {
    if (!db) {
        db = await connect();
    }

    return db.collection(collectionName);
}


