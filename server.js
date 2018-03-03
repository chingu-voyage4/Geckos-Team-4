/*eslint no-console: 1*/
/*eslint no-undef: 1 */

var express = require("express");
var app = express();
app.use(express.static("public"));
var process = require("process");
var path = require("path");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
var port = process.argv[2] || 3000;
app.listen(port);