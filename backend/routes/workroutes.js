const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all work outs
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE single workout" });
});

//UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE single workout" });
});

module.exports = router;
