// pages/api/save-offer.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = 'B-Circles';
const collectionName = 'offers';

export default async (req, res) => {
  try {
    const { ip, offer } = req.body; // Assuming the request body contains the IP address and the won offer data
    if (!ip || !offer) {
      return res.status(400).json({ error: 'IP address and offer are required' });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if the IP address already exists in the database
    const existingOffer = await collection.findOne({ ip });

    if (existingOffer) {
      return res.status(400).json({ error: 'IP address already received an offer' });
    }

    // Save the IP address and the won offer data
    await collection.insertOne({ ip, offer });

    // Return success response
    res.status(200).json({ message: 'Offer saved successfully' });

    await client.close();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
