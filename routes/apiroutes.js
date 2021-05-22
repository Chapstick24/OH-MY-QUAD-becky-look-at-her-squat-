const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    // db.Workout.find({})
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  app.get("/api/workouts/range", ({}, res) => {
    // db.Workout.find({})
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((workoutData) => {
        console.log("workout data", workoutData);
        res.json(workoutData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(

      req.params.id,
      { $push: { exercises: req.body } }
    )
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
