import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ViteExpress from 'vite-express';
import blogRoutes from './routes/blogRoutes.js';

const server = express();

server.use(express.json());
server.use(cors());

const mongoURI = 'mongodb+srv://claraqvistrichards:LL6FXFUvPtJ5PFbD@cluster0.6wnev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

server.use('/api', blogRoutes);

server.get("/message", (_, res) => res.send("Hello from express!"));

server.get('/api/users', async (_, response) => {
    const users = database.collection('users');
    const userData = await users.find().toArray();

    const filteredUserData = userData.map(user => ({ name: user.name, email: user.email }));
    response.json(filteredUserData);
});

ViteExpress.listen(server, 3000, () => console.log('Server is running on http://localhost:3000'));