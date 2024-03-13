const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { register, login } = require('../models/models');

const ACCESS_TOKEN_SECRETS = [
  process.env.ACCESS_TOKEN_SECRET_1,
  process.env.ACCESS_TOKEN_SECRET_2,
  process.env.ACCESS_TOKEN_SECRET_3,
  process.env.ACCESS_TOKEN_SECRET_4,
  process.env.ACCESS_TOKEN_SECRET_5
];

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  register(username, hashedPassword)
    .then(() => res.json({ message: 'User registered successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await login(username);
  if (!user) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  const randomIndex = Math.floor(Math.random() * ACCESS_TOKEN_SECRETS.length);
  const token = jwt.sign({ id: user.id }, ACCESS_TOKEN_SECRETS[randomIndex], { expiresIn: '1h' });

  res.json({ token });
};

module.exports = { registerUser, loginUser };

