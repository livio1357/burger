// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var override = require("method-override");
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================

var app = express();
app.use(express.static("public"))

app.use(override('_method'));

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================
var controller = require("./controllers/burgers_controller.js");

app.use(controller);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

//app.get('/', function (req, res) {
  //  res.render('index', {});
//});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
