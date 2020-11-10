const express = require('express');
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Initializing Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});