

const users = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

router.get('/user',(req, res) => {
    users.getUser()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.delete('/user', (req, res) => {
    users.deleteUser(req.body)
        .then(() => res.json({ message: 'User deleted' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/user',(req,res) => {
    users.createUsers(req.body)   
        .then(() => res.json({ message: 'User created' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

router.put('/user', (req, res) => {
    users.updateUsers(req.body)
        .then(() => res.json({ message: 'User updated' }))
        .catch(err => res.status(500).json({ error: err.message }));
})

module.exports = router;