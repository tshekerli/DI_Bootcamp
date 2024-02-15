const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const cors = require('cors');
router.use(cors());

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        await controller.register(req.body);
        res.status(201).send('User registered');
    } catch (err) {
        console.error(err);
        res.status(400).send('Error registering user');
    }
})

router.post('/login', async (req, res) => {
    try {
        await controller.login(req.body);
        res.send('User logged in');
    } catch (err) {
        console.error(err);
        res.status(400).send('Error logging in');
    }
})

router.get('/users', (req, res) => {
    res.send(controller.getAllUsers());
})

router.get('/user/:id', (req, res) => {
    const user = controller.getUser(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        await controller.updateUser(req.params.id, req.body);
        res.send('User updated');
    } catch (err) {
        console.error(err);
        res.status(400).send('Error updating user');
    }
})

module.exports = router;