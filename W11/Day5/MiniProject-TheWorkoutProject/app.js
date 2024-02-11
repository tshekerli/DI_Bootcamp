const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const exercisesRoutes = require('./routes/exercisesRoutes');
// const workoutsRoutes = require('./routes/workoutsRoutes');
// const usersRoutes = require('./routes/usersRoutes');
// const userWorkoutsRoutes = require('./routes/userWorkoutsRoutes');

// Use routes
app.use('/', exercisesRoutes);

// app.use('/workouts', workoutsRoutes);
// app.use('/users', usersRoutes);
// app.use('/user_workouts', userWorkoutsRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});