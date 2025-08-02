const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database is connected");
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`);
    process.exit(1); // optional: exits the app if db connection fails
  }
};

module.exports = connectDB;
