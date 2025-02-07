// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/userForm", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbURI = "mongodb://127.0.0.1:27017/userForm";  // Correct MongoDB URI
    await mongoose.connect(dbURI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
