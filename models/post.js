// models/post.js

const mongoose = require('mongoose');

// Define a schema for blog posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model based on the schema
const Post = mongoose.model('Post', postSchema);

// Export the model so it can be used in other parts of your application
module.exports = Post;
