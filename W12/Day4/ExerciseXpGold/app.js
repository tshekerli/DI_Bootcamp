const express = require('express');
const router = require('./routes/routes');
const app = express();
const port = 3000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});