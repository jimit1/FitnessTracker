const router = require("express").Router();
const {
  newWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/fitness-controller");

router
  .get("/api/workouts", getWorkout)
  .put("/api/workouts/:id", editWorkout)
  .post("/api/workouts", newWorkout)
  .delete("/api/workouts", deleteWorkout);

router.get("/api/workouts/range", getWorkout);

module.exports = router;
