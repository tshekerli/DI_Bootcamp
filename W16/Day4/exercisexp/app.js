const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});