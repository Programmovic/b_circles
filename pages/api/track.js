// pages/api/track.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = 'B-Circles';
const collectionName = 'visits';

export default async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Find the document with the current visit count
    const result = await collection.findOne({});
    const currentCount = result ? result.count : 0;

    // Increment the visit count
    const updatedCount = currentCount + 1;

    // Update the document with the new count
    await collection.updateOne({}, { $set: { count: updatedCount } }, { upsert: true });

    // Return the updated count
    res.status(200).json({ visits: updatedCount });

    await client.close();
  } catch (error) {
    console.error('Error updating visit count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
