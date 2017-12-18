var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home")
})

app.get("/movies", function(req, res){
    var movie = req.query.movie;
    request("http://www.omdbapi.com/?s=" + movie + "&apikey=thewdb", function(error, response, body){
        if(error) throw err;
        var data = JSON.parse(body)
        res.render("movies", { data: data});
    })
})

app.listen(3000, function(){
    console.log("we out here")
})