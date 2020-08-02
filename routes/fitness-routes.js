const router = require("express").Router();
const {
  newWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/fitness-controller");
// const apiRoute = "/api/workouts";

router
  .get("/api/workouts", getWorkout)
  .post("/api/workouts", newWorkout)
  .put("/api/workouts", editWorkout)
  .delete("/api/workouts", deleteWorkout);

// router.get("/api/workouts/range", getWorkout);

module.exports = router;
