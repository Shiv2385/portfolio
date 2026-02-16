const express = require("express");
const { getProject } = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProject);

module.exports = router;
