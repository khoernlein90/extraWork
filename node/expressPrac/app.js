var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hi there");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        dog: "woof woof",
        cat: "meow",
        pig: "oink",
        cow: "moo"
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("the " + animal + " says " + sound)
})

app.get("/repeat/:input/:num", function(req, res){
    var input = req.params.input;
    var num = Number(req.params.num);
    var result = "";
    for (var i = 0; i < num; i++) {
       result += input + " ";     
    }
    res.send(result);
})

app.get("*", function(req, res){
    res.send("Sorry, page not found")
})

app.listen(3000, function(){
    console.log("were up and running bitch")
})