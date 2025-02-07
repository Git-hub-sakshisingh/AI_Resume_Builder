const mongoose = require('mongoose');


const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    experience: [{
        title: {
            type: String,
            required: true
        },

        companyName: {
            type: String,
            required: true
        },

        date: {
            type: String,
            required: true
        },

        companyLocation: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        accomplishment: {
            type: String,
            required: true
        }
    }],
    education: [{
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        duration: { type: String, required: true },
        grade: { type: String, required: true }
    }],
    achievements: [{
        keyAchievements: { type: String, required: true },
        describe: { type: String, required: true }
    }],
    certifications: [{
        certificates: { type: String, required: true },
        link: { type: String, required: true }
    }],
    skills: [{ type: String, required: true }],
    projects: [{
        pname: { type: String, required: true },
        pdate: { type: String, required: true },
        psummary: { type: String, required: true }
    }]
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
