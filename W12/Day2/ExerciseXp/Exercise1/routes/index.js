const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>This is homepage</h1>');
})
router.get('/about', (req, res) =>{
    res.send('<h1> This is about us page</h1>')
})

module.exports = router