import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Anonymous" },
    createdAt: { type: Date, default: Date.now },
    tags: [String],
});

export default mongoose.model('BlogPost', blogPostSchema);
