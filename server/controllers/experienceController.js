const Experience = require("../models/experienceModel");

const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch experience" });
    }
};

module.exports = { getExperience };
