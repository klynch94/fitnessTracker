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

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
});

// get workout within range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
});

// update workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {_id: req.params.id},
        {$push: {exercises: req.body}}
    ).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;