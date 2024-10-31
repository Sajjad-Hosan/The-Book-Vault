const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


//middleware
app.use(cors())
app.use(express.json());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sgplmdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const booksCollection = client.db('TheBookVault').collection('books');
    const cartCollection = client.db('TheBookVault').collection('CartCollection');
    const usersCollection = client.db('TheBookVault').collection('UsersCollection');

    // users operation------->>
    //post user
    // app.post('/users', async (req, res) => {
    //   const user = req.body;
    //   const query = { email: user.email };
    //   const existingUser = await usersCollection.findOne(query)
    //   if (existingUser) {
    //     return res.send({ message: 'User already exists', insertedId: null })
    //   }
    //   const result = await usersCollection.insertOne(user);
    //   res.send(result)
    // })

    //Get Operations------>>

    app.get('/allBooks', async (req, res) => {
      const result = await booksCollection.find().toArray();
      res.send(result);
    });

    app.get('/details/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(query);
      res.send(result);
    });

    app.get('/cart', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    })

    // Post Operations

    app.post('/add_user', async (req,res) => {
      const user = req.body;
      const query = { email: user.email };
      const alreadyUser = await usersCollection.findOne(query);

      if(alreadyUser){
        res.send({insertedId: null});
      }
      else{
        const result = await usersCollection.insertOne(user);
        res.send(result);
      }
    });

    app.post('/add_to_cart', async (req, res) => {
      const add = req.body;
      const result = await cartCollection.insertOne(add);
      res.send(result);
    });

    //add to books
    app.post("/addbook", async (req, res) => {
      const newbook = req.body;
      const result = await booksCollection.insertOne(newbook);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Server is running')
})

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`)
})