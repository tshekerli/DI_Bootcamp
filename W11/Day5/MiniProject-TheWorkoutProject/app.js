
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const workoutsRoutes = require('./routes/workoutsRoutes');
const userWorkoutsRoutes = require('./routes/userWorkoutsRoutes');
const exercisesRoutes = require('./routes/exercisesRoutes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', usersRoutes);
app.use('/', workoutsRoutes);
app.use('/', userWorkoutsRoutes);
app.use('/', exercisesRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));