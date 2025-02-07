// backend/routes/resumeRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const { createResume } = require("../controllers/resumeControllers");

const router1 = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
});

router1.post("/create", upload.single("photo"), createResume);

module.exports = router1;
