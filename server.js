/*eslint no-console: 1*/

var express = require("express");
var app = express();
var thisProcess = require("process");

app.get("/", function(req, res) {
    res.send("Hello World");
});
var port = thisProcess.argv[2] || 3000;
app.listen(port);
console.log("app listening on port " + port);