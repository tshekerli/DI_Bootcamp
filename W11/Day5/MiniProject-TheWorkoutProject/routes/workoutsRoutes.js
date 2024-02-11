// routes/workoutsRoutes.js

const workouts = require('../controllers/workoutController');
const express = require('express');
const router = express.Router();

router.get('/workout',(req, res) => {
    workouts.getWorkout()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.delete('/workout', (req, res) => {
    workouts.removeWorkout(req.body)  // Updated function call
        .then(() => res.json({ message: 'Workout deleted' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/workout',(req,res) => {
    workouts.createWorkouts(req.body)   
        .then(() => res.json({ message: 'Workout created' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.put('/workout', (req, res) => {
    workouts.updateWorkouts(req.body)
        .then(() => res.json({ message: 'Workout updated' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

module.exports = router;
