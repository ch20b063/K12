const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const flashcardRoutes = require('./routes/flashcardRoutes');
const studentRoutes = require('./routes/studentRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flashcard-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api', flashcardRoutes);
app.use('/api', studentRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
