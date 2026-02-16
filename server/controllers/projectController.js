const Project = require("../models/projectModel");

const getProject = async (req, res) => {
    try {
        const project = await Project.find().sort({ createdAt: -1 });
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects" });
    }
};

module.exports = { getProject };