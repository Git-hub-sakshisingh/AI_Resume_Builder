// backend/models/Resume.js
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    image_url: { type: String, required: true },
    currentPosition: { type: String, required: true },
    currentLength: { type: Number, required: true },
    currentSkills: { type: String, required: true },
    workHistory: [
      {
        name: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    objective: { type: String, required: true },
    keypoints: { type: String, required: true },
    jobResponsibilities: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and export the model
const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
