// Set express
const express = require('express');
// Set Handlebars
const exprsHandlebars = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Finish setting handlebars
app.engine("handlebars", exprsHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// const routes = require("../../controllers/burgers_controller.js");

app.use(express.static("../../controllers/burgers_controller.js"));

// Start server so that it begins listening to client requests.
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});


