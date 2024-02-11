const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const getExercise = () => {
  knex
    .select()
    .table("exercises")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

const createExercises = (params) =>{
    knex(params.tableName)
    .insert(params.newItem)
    .then(() => console.log('Data inserted'))
    .catch(err => console.error(err));
}

const updateExercises = (params) => {
  knex(params.tableName)
    .where("column", "value")
    .update(params.columnChange)
    .then(() => console.log("Data updated"))
    .catch((err) => console.error(err));
};

const deleteExercise = (params) => {
  knex(params.tableName)
    .where(params.column, params.value)
    .del()
    .then(() => console.log("Data deleted"))
    .catch((err) => console.error(err));
};



getExercise();
