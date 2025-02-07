// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const path = require("path");
// const bodyParser = require("body-parser");
// const connectDB = require("./config/db");
// const formRoutes = require("./routes/formRoutes");
// const connectToMongo=require('./config/resumedb');
// const resumeRoutes = require("./routes/resumeRoutes");
// const connectEditable = require("./config/editableResume");
// // const editRouter = require("./routes/editableResume")


// const app = express();
// const port = process.env.port || 5000;

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();
// connectToMongo();
// connectEditable();


// // Use routes
// app.use("/api", formRoutes);
// app.use("/output", resumeRoutes);
// // app.use("/api/editresume",editRouter);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../enhancecv/public/index.html"));
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo = require("./config/resume1.config");
// Import routes
const  router = require('./routes/resume1.route');
// const router1 = require('./routes/resumeRoutes')


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectToMongo();


// Use routes
app.use('/api/resume',router);
app.use('/api/auth',require('./routes/auth'))

// app.use("/output", router1);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
