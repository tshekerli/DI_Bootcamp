const exercises = require('../controllers/exercisesController');
const express = require('express');
const router = express.Router();


//Finds all the workouts
router.get('/exercise',(req, res) => {
    exercises.getExercise()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
})

//deletes a specific workout. key should be column:'id', and id:idnumber, and tableName:tablename
router.delete('/exercise', (req, res) => {
    exercises.deleteExercise(req.body)
        .then(() => res.json({ message: 'Exercise deleted' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

//creates a new workout, keys should be  tablename:tablename, newItem:{name:nameOfTheItem, description:descriptionOfTheItem, muscle_group:muscleGroupOfTheItem} 
router.post('/exercise',(req,res) => {
    exercises.createExercises(req.body)   
        .then(() => res.json({ message: 'Exercise created' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

//updates a selected exercise, keys should be. columntToBeChanged:id, id:idNumber, columnchange:{key:value}
router.put('/exercise', (req, res) => {
    exercises.updateExercises(req.body)
        .then(() => res.json({ message: 'Exercise updated' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

module.exports = router;