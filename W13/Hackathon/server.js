const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const port = 3000;
const routes = require('./routes/routes');
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

