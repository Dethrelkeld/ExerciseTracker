const router = require("express").Router();
const { findById } = require("../models/workout.js");
const Workout = require("../models/workout.js");


//  post to create workout
router.post("/api/workouts", (req, res) =>{
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    });
});

//  put request to add to workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push:{
            exercises: req.body,
        }},{
            new: true, 
            runValidators: true
        }
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    });
});

// get request to get last workout
router.get("/api/workouts/", (req, res) => {
    Workout.find({})
        .then((data) => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        });
});

// get request to get all workouts
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log(err);
      });
  });



// delete to delete a workout
router.delete("/api/workouts/:id", (req, res) => {
    Workout.findById(req.params.id)
});


module.exports = router;