const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();
const port = 3000;

app.use('/users', userRoutes);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});