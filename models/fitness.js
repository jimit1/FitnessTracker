let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    // required: "Must enter an exercise type",
  },
  name: {
    type: String,
    trim: true,
    // required: "Must enter an exercise name",
  },
  distance: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
    // require: "Must enter exercise duration",
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  // {_id: false}
});

const workoutSchema = new Schema({
  day: String,
  exercises: [exerciseSchema],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = { Workout };
