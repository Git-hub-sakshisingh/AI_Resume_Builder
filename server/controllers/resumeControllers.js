// backend/controllers/resumeController.js
require("dotenv").config();
const Resume = require("../models/Resume.model");
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const GPTFunction = async (text) => {
  try {
    const generationConfig = {
      temperature: 0.6,
      maxOutputTokens: 250,
    };
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text }] }],
      generationConfig,
      safetySettings,
    });

    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};

const createResume = async (req, res) => {
  try {
    const { fullName, currentPosition, currentLength, currentSkills, workHistory } = req.body;
    const workArray = JSON.parse(workHistory);

    const newEntry = {
      fullName,
      image_url: `http://localhost:5000/uploads/${req.file.filename}`,
      currentPosition,
      currentLength,
      currentSkills,
      workHistory: workArray,
    };

    const prompt1 = `I am writing a resume, my details are \n name: ${fullName}\n role: ${currentPosition} (${currentLength} years). \n My Skill set includes: ${currentSkills}. Can you write a 100 words description for the top of the Resume (first person writing)?`;
    const prompt2 = `I am writing a resume, my details are \n name: ${fullName}\n role: ${currentPosition} (${currentLength} years). \n My Skill set includes: ${currentSkills}. Can you write some points for the resume which increases my ATS score?`;

    const remainderText = () => {
      let stringText = "";
      for (let i = 0; i < workArray.length; i++) {
        stringText += `${workArray[i].name} as a ${workArray[i].position}. `;
      }
      return stringText;
    };

    const prompt3 = `I am writing a resume, my details are \n name: ${fullName}\n role: ${currentPosition} (${currentLength} years). \n My Skill set includes: ${currentSkills}. During my years, I worked at ${workArray.length} companies. ${remainderText()} Can you write 50 words for each company separated in numbers of my succession in the company (in first person)?`;

    const objective = await GPTFunction(prompt1);
    const keypoints = await GPTFunction(prompt2);
    const jobResponsibilities = await GPTFunction(prompt3);

    const chatgptData = { objective, keypoints, jobResponsibilities };
    const data = { ...newEntry, ...chatgptData };

    const resume = new Resume(data);
    await resume.save();

    res.json({
      message: "Request successful",
      data: resume,
    });
  } catch (error) {
    console.error("Error processing resume request:", error);
    res.status(500).json({ message: "Error processing request", error: error.message });
  }
};

module.exports = { createResume };
