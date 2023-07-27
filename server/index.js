const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
const corsOption = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOption));
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.as9pvg2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const bookingsCollection = client.db('airCNC').collection('bookings')
    const usersCollection = client.db('airCNC').collection('users');
    const roomsCollection = client.db('airCNC').collection('rooms');

    app.put('/users/:email', async(req, res)=> {
        const email = req.params.email
        const user = req.body
        const query = { email : email} 
        const options = {upsert: true};
        const updateDoc = {
          $set : user,
        }
        const result = await usersCollection.updateOne(query, updateDoc, options);
        console.log(result)
        res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('airCNC Server is Running')
})

app.listen(port, ()=>{
    console.log('AirCNC Server is Running On PORT', port);
})