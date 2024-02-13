const express = require("express");
const router = require("./routes/index.js");
const app = express();
app.use(router);

app.listen(3000, () => console.log("app is listening on port 3000"));
