require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");

const app = express();

connectDB();


app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/api/project", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Portfolio API Running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
