const express = require("express");
const app = express();
// chalk 4.1.1 - color the logs
app.use((error, req, res, next) => {
    console.log(error.message);
    res.status(500).send(error.message);
});

module.exports = app;
