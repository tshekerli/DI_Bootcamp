const express = require('express');

const app = express()

const router = require('./routes/route');
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('App is listening on port 3000'))