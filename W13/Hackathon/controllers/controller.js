const models = require('../models/model');

const getAllPeople = (req, res) => {
    models.getAllPeople()
        .then((data) => {
        res.status(200).json(data);
        })
        .catch((err) => {
        res.status(500
        ).json(err);
        });
}

const getData = (req, res) => {
    models.getData()
        .then((data) => {
        res.status(200).json(data);
        })
        .catch((err) => {
        res.status(500).json(err);
        });
}


const addPerson = (req, res) => {
  
    const person  = req.body;

    models.addPerson(person)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        if (err.code === '23505') {
            res.status(400).json({ error: 'A person with this ID already exists.' });
        } else {
            res.status(500).json(err);
        }
    });

}
    


module.exports = { getAllPeople, getData, addPerson };