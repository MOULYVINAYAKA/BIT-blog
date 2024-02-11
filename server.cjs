// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.cjs');
const postRouter = require('./routes/posts.js');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');

  // Routes
  app.use('/api', postRouter);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
