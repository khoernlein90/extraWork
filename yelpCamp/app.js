var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seed");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

seedDB();

mongoose.connect("mongodb://localhost/yelp_camp");

app.get("/", function (req, res) {
    res.render("landing");
})

// INDEX ROUTE
app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) throw err;
        else {
            res.render("./campgrounds/index", { campgrounds: allCampgrounds })
        }
    })
})

// NEW ROUTE
app.get("/campgrounds/new", function (req, res) {
    res.render("./campgrounds/new");
})

// SHOW ROUTE
app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, pickedCampground) {
        if (err) throw err;
        else {
            res.render("./campgrounds/show", { campground: pickedCampground });
        }
    })
})

// CREATE ROUTE
app.post("/campgrounds", function (req, res) {
    Campground.create(req.body.campground, function (err, newlyAdded) {
        if (err) throw err;
        else {
            res.redirect("/campgrounds");
        }
    })
})
// NEW COMMENT ROUTE / FORM
app.get("/campgrounds/:id/comments/new", function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) throw err;
        else {
            res.render("./comments/new", { campground: campground });
        }
    })
})

// SEND NEW COMMENT DATA TO SPECIFIC CAMPGROUND
app.post("/campgrounds/:id/comments", function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) throw err;
        else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) throw err;
                else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        }
    })
})

app.listen(3000, function () {
    console.log("we out here")
})