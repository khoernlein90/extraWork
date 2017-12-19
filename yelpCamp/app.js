var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/yelp_camp");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function (req, res) {
    res.render("landing");
})

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) throw err;
        else {
            res.render("index", { campgrounds: allCampgrounds })
        }
    })
})

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
})

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, pickedCampground){
        if(err) throw err;
        else {
            res.render("show", {campground: pickedCampground});
        }
    })
})

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = { name: name, image: image, description: description };
    Campground.create(newCampground, function (err, newlyAdded) {
        if (err) throw err;
        else {
            res.redirect("/campgrounds");
        }
    })
})

app.listen(3000, function () {
    console.log("we out here")
})