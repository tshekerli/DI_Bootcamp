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
  
    const person  = {
        name: req.body.name,
        lastname: req.body.lastname,
        photo: req.body.photo,
        currentLocation: req.body.currentLocation,
        contactinfo: req.body.contactinfo
    }

    models.addPerson(person)
        .then((data) => {
        res.status(200).json(data);
        })
        .catch((err) => {
        res.status(500).json(err);
        });

}
    


module.exports = { getAllPeople, getData, addPerson };