const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
router.use(express.json());

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;