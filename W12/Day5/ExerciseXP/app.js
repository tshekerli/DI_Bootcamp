const express = require('express');
const fs = require('fs')
const router = require('./routes/routes.js')
const app = express()
app.use(express.json())

app.use(router)





app.listen(3000)