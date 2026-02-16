const Contact = require("../models/contactModel");

const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        await Contact.create({
            name,
            email,
            message,
        });

        return res.status(201).json({
            message: "Message saved successfully",
        });

    } catch (error) {
        console.error("Contact Error:", error);
        return res.status(500).json({
            message: "Server error",
        });
    }
};

module.exports = { createContact };
