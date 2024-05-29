import { MongoClient } from "mongodb";



let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  

  cachedClient = client;
  return client;
}

module.exports = { connectToDatabase };
