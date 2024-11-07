// db.js
const mongoose = require('mongoose');
require('dotenv').config();  // Ensure this is at the top

const connectDB = async () => {
  try {
    // Ensure MONGODB_URI is correctly loaded from .env file
    const uri = process.env.MONGODB_URL;

    if (!uri) {
      console.error("MongoDB URI is missing in .env file!");
      process.exit(1);  // Exit the app if URI is missing
    }

    // Connect to MongoDB using the URI from .env
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
