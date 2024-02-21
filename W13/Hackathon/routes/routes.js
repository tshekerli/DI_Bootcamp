const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
router.use(express.json());

router.get('/people', controller.getAllPeople);

router.get('/data', controller.getData);

module.exports = router;

