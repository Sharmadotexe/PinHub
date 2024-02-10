const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/postsData")

// Define post schema
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    user:{
     type:  mongoose.Schema.Types.ObjectId,
     ref:"user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []
    }
});

// Create Post model
module.exports = mongoose.model('Post', postSchema);
