import express from 'express';
import ViteExpress from 'vite-express';
import { MongoClient } from "mongodb";
  
const CONNECTION_URI = "mongodb+srv://claraqvistrichards:FRz1E3OVRZhyHcZ5@cluster0.6wnev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
const client = new MongoClient(CONNECTION_URI);
const database = client.db('sample_mflix');


const server = express();

server.get("/message", (_, res) => res.send("Hello from express!"));

server.get('/api/users', async (_, response) => {
    const users = database.collection('users');
    const userData = await users.find().toArray();

    const filteredUserData = userData.map(user => ({ name: user.name, email: user.email }));
    response.json(filteredUserData);
});

ViteExpress.listen(server, 3000, () => console.log('Server is running on http://localhost:3000'));