var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
const PORT = 3000;
var object = {}
app.use(bodyParser.urlencoded({ extended: true }));
//nasłuch na określonym porcie
app.use(express.static('static'))
app.post("/write", function (req, res) {
    object = {}
    object = req.body
})
app.post("/read", function (req, res) {
    res.send(object)
})

app.get("/hex.html", function (req, res) {
    console.log("XDD")
    //console.log(__dirname + "/static/hex.html")
    res.sendFile(path.join(__dirname + "/static/hex.html"))
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})