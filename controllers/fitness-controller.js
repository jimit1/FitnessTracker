const db = require("../models/fitness");

module.exports = {
  newWorkout: (req, res) => {
    const newWorkout = {
      day: new Date().getTime(),
      exercises: [
        {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          distance: req.body.distance,
          weight: req.body.weight,
          sets: req.body.sets,
          reps: req.body.reps,
        },
      ],
    };
    db.Workout.create(newWorkout)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },

  getWorkout: (req, res) =>
    !req.query.id
      ? db.Workout.find({})
          .then((allworkouts) => res.send(allworkouts))
          .catch((err) => res.send(err))
      : db.Workout.findById(req.query.id)
          .then((foundworkout) => res.send(foundworkout))
          .catch((err) => res.send(err)),

  editWorkout: (req, res) => {
    console.log(req.body);
    const newWorkout = {
      day: new Date().getTime(),
      exercises: [
        {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          distance: req.body.distance,
          weight: req.body.weight,
          sets: req.body.sets,
          reps: req.body.reps,
        },
      ],
    };
    db.Workout.findByIdAndUpdate(req.params.id, newWorkout)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err));
  },

  deleteWorkout: (req, res) =>
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err)),
};
