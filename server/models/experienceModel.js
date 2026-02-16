const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
        },
        duration: {
            type: String, // Already formatted string
            required: true,
        },
        responsibilities: {
            type: [String],
            required: true,
        },
        techStack: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
