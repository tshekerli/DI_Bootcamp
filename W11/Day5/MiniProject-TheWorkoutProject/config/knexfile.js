module.exports = {
    development: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : '12345',
        database : 'theWorkoutProject'
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
  };