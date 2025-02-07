const mongoose = require("mongoose");

const connectToMongo = async () => {
      try {
        await mongoose.connect(process.env.MONGODB_URI, { 
          serverSelectionTimeoutMS: 5000 
        });
        console.log("MongoDB connected successfully.");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
      }
    };

module.exports = connectToMongo;

    