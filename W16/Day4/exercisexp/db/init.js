const knex = require('knex')(require('../config/knexfile').development);

module.exports = knex;