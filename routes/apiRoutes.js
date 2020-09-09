const router = require("express").Router();
const db = require("../models");

// create workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
});

