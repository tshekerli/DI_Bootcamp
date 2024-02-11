// routes/userWorkoutsRoutes.js

const userWorkouts = require('../controllers/userWorkoutsController');
const express = require('express');
const router = express.Router();

router.get('/userworkout',(req, res) => {
    userWorkouts.getUserWorkout()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.delete('/userworkout', (req, res) => {
    userWorkouts.removeUserWorkout(req.body)  // Updated function call
        .then(() => res.json({ message: 'User workout deleted' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/userworkout',(req,res) => {
    userWorkouts.createUserWorkouts(req.body)   
        .then(() => res.json({ message: 'User workout created' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.put('/userworkout', (req, res) => {
    userWorkouts.updateUserWorkouts(req.body)
        .then(() => res.json({ message: 'User workout updated' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

module.exports = router;