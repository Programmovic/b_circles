// pages/api/save-offer.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = 'B-Circles';
const collectionName = 'offers';

export default async (req, res) => {
  try {
    const { email, offer, verificationCode } = req.body; // Assuming the request body contains the email, offer, and verification code data
    if (!email || !offer || !verificationCode) {
      return res.status(400).json({ error: 'Email, offer, and verification code are required' });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if the email is verified
    const existingOffer = await collection.findOne({ email, verificationCode });

    if (!existingOffer) {
      return res.status(400).json({ error: 'Email is not verified or verification code is incorrect' });
    }

    // Save the email and offer data
    await collection.insertOne({ email, offer });

    // Return success response
    res.status(200).json({ message: 'Offer saved successfully' });

    await client.close();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
