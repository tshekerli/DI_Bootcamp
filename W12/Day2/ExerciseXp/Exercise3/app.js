const express = require('express');
const router = require('./routes/book')
const app = express()
app.use(express.json())
app.use(router)
app.listen(3000, () => console.log('App is listening on port 3000'))