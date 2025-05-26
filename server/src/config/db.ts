const { MongoClient, ServerApiVersion } = require("mongodb");
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URL;
//   "mongodb+srv://aniket19m:F5wPW3mZFh0EuoVZ@imgaicluster.azpsnrb.mongodb.net/?retryWrites=true&w=majority&appName=imgAICluster";

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectTOMongoDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Optional: crash if DB not connected
  }
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}
// connectTOMongoDB().catch(console.dir);
