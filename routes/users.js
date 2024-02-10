const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/dataModeling")


// Define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }],
    dp: {
        type: String
    },
    email: {  
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String
    }
});

// Create User model
module.exports = mongoose.model('User', userSchema);


