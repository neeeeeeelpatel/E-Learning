// Load environment variables from .env file
try {
  require('dotenv').config();
  console.log('Environment variables loaded');
} catch (error) {
  console.error('Error loading environment variables:', error);
  process.exit(1);
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// Initialize Express application
const app = express();

// Middleware Configuration
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// API Routes
app.use('/api/auth', authRoutes); // Mount authentication routes

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/learning-platform';
    console.log('Attempting to connect to MongoDB at:', mongoURI);
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error details:', err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }).on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
  });
} catch (error) {
  console.error('Error starting server:', error);
  process.exit(1);
} 