const express = require("express");
const app = express();
const routes = require("./routes/routes");
const morgan = require("./logger/morgan");
const serverError = require("./error-handling/serverError");

app.use(morgan);
app.use(express.json());
app.use(express.text());
app.use(routes);

app.use(serverError);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) return console.log("Server Listen Error: ", err.message);
    console.log(`Server is running`);
});
