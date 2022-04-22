const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// dbuser2
// v6jRQPaV2dHknoUK



const uri = "mongodb+srv://dbuser2:v6jRQPaV2dHknoUK@cluster0.j3t0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

    }
    finally {

    }

}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running my node CRUD Server');

});

app.listen(port, () => {
    console.log('CRUD server is running');
})