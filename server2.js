import ViteExpress from 'vite-express';
import express from 'express';
import { MongoClient } from 'mongodb';

const PORT = 3001;

const MONGO_USER = 'claraqvistrichards';
const MONGO_PASSWORD = 'LL6FXFUvPtJ5PFbD';
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.6wnev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('blog');

app.use(express.json());

app.get('/api/blog/latest', async (_, response) => {
    const LIMIT = 10;
    const data = database.collection('blogposts').find().sort({ _id: -1 }).limit(LIMIT);
    response.json(await data.toArray());
});

app.post('/api/blog', async (request, response) => {
    const data = request.body;
  
});

ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
