var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var people = ["kyle", "carl", "shannon", "bob"]

app.get("/", function(req, res){
    res.render("home");
})

// app.get("/:name/:age", function(req, res){
//     var person = req.params.name;
//     var age = req.params.age;

//     res.render("person", {
//         person: person,
//         age: age
//     });
// })

app.post("/addperson", function(req, res){
    var newPerson = req.body.newPerson;
    people.push(newPerson);
    res.redirect("/people");
})

app.get("/people", function(req, res){
    res.render("people", {
        people: people
    })
})

app.listen(3000, function(){
    console.log("we out here")
})