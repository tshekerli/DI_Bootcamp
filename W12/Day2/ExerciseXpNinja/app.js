const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/emoji');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));