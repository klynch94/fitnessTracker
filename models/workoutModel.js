const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create new schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: Array,
        default: []
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;