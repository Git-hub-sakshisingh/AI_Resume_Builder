const express = require("express");
const router = express.Router();
const { editResume } = require("../controllers/resume1.controller");
const Resume = require('../models/Resume1.model')

router.post("/resume1", editResume);



router.get('/resume', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resume data', error });
  }
});


module.exports = router;
