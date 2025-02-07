const Resume = require('../models/Resume1.model')

const editResume = async (req, res) => {
  const resumeData = req.body;
  try {
    const newResume = new Resume(resumeData);
    await newResume.save();
    res.status(201).json({ message: 'Resume saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving resume', error });
  }
}

module.exports = {editResume}