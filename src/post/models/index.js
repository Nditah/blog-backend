import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    user: { type: String },
    tags: [{ type: String }],
    selectedFile: { type: String },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
})

const Post = mongoose.model('Post', postSchema)

export default Post
