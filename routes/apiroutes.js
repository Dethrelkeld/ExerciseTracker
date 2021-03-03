const router = require("express").Router();
const { findById } = require("../models/workout.js");
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) =>{
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    });
});

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
        res.json(err)
    });
})

// router.get
// router.get

// find aggregate method from mongoose docs

// router.delete
router.delete("/api/workouts/:id", (req, res) => {
    Workout.findById(req.params.id)
})


module.exports = router;