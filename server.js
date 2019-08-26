
const express = require("express");
const logger = require("./config/winston")
const path = require('path');

// const transporter = require("./config/nodemailer")
const morgan = require("morgan");
// Web servers can often compress the HTTP response sent back to a client, 
// significantly reducing the time required for the client to get and load the page. 
// The compression method used will depend on the decompression methods 
// the client says it supports in the request (the response will be sent uncompressed 
// if no compression methods are supported).
const compression = require("compression");

//Steps to enable https - Set up for both http and https is needed so that any http request is redirected to https
const fs = require("fs");
const https = require('https');

require("dotenv").config();
// Set up our port to be either the host"s designated port, or 3000
const PORT = process.env.PORT || 3001;

// Instantiate our Express App
const app = express();

// // Requiring our models for syncing
// let db = require("./models");

// Require our routes
const routes = require("./controllers");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'pug')

// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Have every request go through our route middleware
app.use(routes);
app.use(compression()); //Compress all routes1
app.use(morgan('combined', { stream: logger.stream }));

// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// });