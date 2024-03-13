const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const cors = require('cors');
const router = express.Router();



router.use(express.json());
router.use(cors());

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;