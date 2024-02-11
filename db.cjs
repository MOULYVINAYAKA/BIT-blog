// db.js

const mongoose = require('mongoose');

// MongoDB connection URL
const DB_URL = 'mongodb://localhost:27017/BIT-blog';

// Establish MongoDB connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

module.exports = mongoose.connection;
