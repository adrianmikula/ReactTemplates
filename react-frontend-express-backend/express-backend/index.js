const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const env = require('dotenv').config()

// Use Morgan to automatically log HTTP requests
app.use(logger('dev'));

// Enable cross-origin resource sharing
app.use(cors());

// Use the body-parser library to handle HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up the routes
const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

// start the backend listening on the configured port
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;