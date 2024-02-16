const knex = require('knex');

module.exports = {
    db: knex({
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            port: 5432,
            password: '12345',
            database: 'blog-api'
        }
    })
};


