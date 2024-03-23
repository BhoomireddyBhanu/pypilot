// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhanubhoomireddy0924:ZErhbfdUcXAI6R1o@pypilot.gnveahm.mongodb.net/?retryWrites=true&w=majority&appName=pypilot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a MongoDB Schema (e.g., User)
const userSchema = new mongoose.Schema({
  email: String,
  userId: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/register', (req, res) => {
  const { email, userId, password } = req.body;

  const newUser = new User({ email, userId, password });

  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
