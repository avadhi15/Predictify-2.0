const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Route to handle prediction request
app.post("/api/predict", async (req, res) => {
    const studentData = req.body;

    // Call Python model (you’ll build it next)
    const result = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
    });

    const prediction = await result.json();
    res.json(prediction);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
