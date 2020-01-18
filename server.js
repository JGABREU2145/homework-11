var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("viewengine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes)

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})