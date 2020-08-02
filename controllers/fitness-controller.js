const db = require("../models/fitness");

module.exports = {
  newWorkout: (req, res) =>
    db.Workout.create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err)),

  getWorkout: (req, res) =>
    !req.query.id
      ? db.Workout.find({})
          .then((allworkouts) => res.send(allworkouts))
          .catch((err) => res.send(err))
      : db.Workout.findById(req.query.id)
          .then((foundworkout) => res.send(foundworkout))
          .catch((err) => res.send(err)),

  editWorkout: (req, res) =>
    db.Workout.findByIdAndUpdate(req.query.id, req.body)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err)),

  deleteWorkout: (req, res) =>
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err)),
};
