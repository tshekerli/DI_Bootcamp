const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);

// knex.raw('SELECT 1+1 AS result')
//   .then(() => {
//     console.log('Database connection successful');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to the database:', error);
//   });

  // knex.schema.createTable('exercises', (table) => {
  //   table.increments('id');
  //   table.string('name');
  //   table.text('description');
  //   table.string('muscle_group');
  //   table.timestamp('created_at').defaultTo(knex.fn.now());
  //   table.timestamp('updated_at').defaultTo(knex.fn.now());
  // }).then(() => console.log("exercises table created"))
  //   .catch((err) => { console.log(err); throw err })
  //   .finally(() => {
  //     knex.destroy();
  // });


// knex.schema.createTable('workouts', (table) => {
//     table.increments('id');
//     table.string('title');
//     table.text('description');
//     table.integer('created_by');
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//   }).then(() => console.log("workouts table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//       knex.destroy();
//   });

//   knex.schema.createTable('users', (table) => {
//     table.increments('id');
//     table.string('username');
//     table.string('email');
//     table.string('password');
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//   }).then(() => console.log("users table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//       knex.destroy();
//   });

//   knex.schema.createTable('user_workouts', (table) => {
//     table.increments('id');
//     table.integer('user_id');
//     table.integer('workout_id');
//   }).then(() => console.log("user_workouts table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//       knex.destroy();
//   });



const exercises = [
    {
      "id": 1,
      "name": "Push-ups",
      "description": "An exercise for upper body strength.",
      "muscle_group": "Chest",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 2,
      "name": "Squats",
      "description": "An exercise for lower body strength.",
      "muscle_group": "Legs",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 3,
      "name": "Pull-ups",
      "description": "An exercise for upper body strength.",
      "muscle_group": "Back",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    }
  ]

const workouts = [
    {
      "id": 1,
      "title": "Upper Body Workout",
      "description": "A workout routine for upper body strength.",
      "created_by": 1,
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 2,
      "title": "Lower Body Workout",
      "description": "A workout routine for lower body strength.",
      "created_by": 2,
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 3,
      "title": "Full Body Workout",
      "description": "A workout routine for full body strength.",
      "created_by": 3,
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    }
  ]

const users = [
    {
      "id": 1,
      "username": "user1",
      "email": "user1@example.com",
      "password": "password1",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 2,
      "username": "user2",
      "email": "user2@example.com",
      "password": "password2",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    },
    {
      "id": 3,
      "username": "user3",
      "email": "user3@example.com",
      "password": "password3",
      "created_at": "2022-01-01 00:00:00",
      "updated_at": "2022-01-01 00:00:00"
    }
  ]

const user_workouts = [
    {
      "id": 1,
      "user_id": 1,
      "workout_id": 1
    },
    {
      "id": 2,
      "user_id": 2,
      "workout_id": 2
    },
    {
      "id": 3,
      "user_id": 3,
      "workout_id": 3
    }
  ]

knex('exercises').insert(exercises)
  .then(() => console.log('Data inserted into exercises table'))
  .catch((err) => console.log(err));

knex('workouts').insert(workouts)
  .then(() => console.log('Data inserted into workouts table'))
  .catch((err) => console.log(err));

knex('users').insert(users)
  .then(() => console.log('Data inserted into users table'))
  .catch((err) => console.log(err));

knex('user_workouts').insert(user_workouts)
  .then(() => console.log('Data inserted into user_workouts table'))
  .catch((err) => console.log(err));