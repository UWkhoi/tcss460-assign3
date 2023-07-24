const express = require("express");
const cors = require('cors');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Root URL
app.get('/', function (req, res) { 
    console.log("Request received at the root URL"); 
    res.status(200).end();
});

// Calculate Daily Calorie Intake
app.get("/calories/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height) / 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400).json({ error: "Invalid age, weight, or height." });
        return;
    }
    const dailyCal = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    console.log("/calories/age/weight/height request received. Calculated Daily Calories:", dailyCal);
    res.status(200).json({ dailyCal: dailyCal });
});

// Calculate Basal Metabolic Rate (BMR)
app.get("/bmr/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height) / 100;
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        res.status(400).json({ error: "Invalid age, weight, or height." });
        return;
    }
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log("/bmr/age/weight/height request received. Calculated BMR:", bmr);
    res.status(200).json({ bmr: bmr });
});

// Calculate Body Fat
app.get("/bodyfat/:age/:bmi", function(req, res) {
    const bmi = parseInt(req.params.bmi);
    const age = parseInt(req.params.age);
    if (isNaN(age) || isNaN(bmi)) {
        res.status(400).json({ error: "Invalid age or BMI." });
        return;
    }
    const bodyfat = (1.20 * bmi) + (0.23 * age) - 16.2;
    console.log("/bodyfat/age/bmi request received. Calculated Body Fat:", bodyfat);
    res.status(200).json({ bodyfat: bodyfat });
});

// Calculate Body Mass Index (BMI)
app.get("/bmi/:weight/:height", function(req, res) {
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height);
    if (isNaN(weight) || isNaN(height)) {
        res.status(400).json({ error: "Invalid weight or height." });
        return;
    }
    const bmi = weight / (Math.pow(height, 2));
    console.log("/bmi/weight/height request received. Calculated BMI:", bmi);
    res.status(200).json({ bmi: bmi });
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, function () { 
    console.log(`API version 1.0.0 is running on port ${PORT}`); 
});
