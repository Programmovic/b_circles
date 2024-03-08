// pages/api/check-offer.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = 'B-Circles';
const collectionName = 'offers';

export default async (req, res) => {
  try {
    const { ip } = req.body; // Assuming the request body contains the IP address
    if (!ip) {
      return res.status(400).json({ error: 'IP address is required' });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if the IP address already exists in the database
    const existingOffer = await collection.findOne({ ip });

    if (existingOffer) {
      return res.status(200).json({ hasOffer: true, offer: existingOffer });
    } else {
      return res.status(200).json({ hasOffer: false });
    }

    await client.close();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
