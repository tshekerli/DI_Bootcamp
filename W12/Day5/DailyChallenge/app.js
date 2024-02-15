const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(express.json());
app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
