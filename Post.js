import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: String, require: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    img: {type: String}
})

export default mongoose.model('Post', Post)