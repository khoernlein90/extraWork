var Campground = require("../models/campground");
var express = require("express");
var router = express.Router();

// INDEX ROUTE
router.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) throw err;
        else {
            res.render("./campgrounds/index", { campgrounds: allCampgrounds })
        }
    })
})

// NEW ROUTE
router.get("/campgrounds/new", function (req, res) {
    res.render("./campgrounds/new");
})

// SHOW ROUTE
router.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, pickedCampground) {
        if (err) throw err;
        else {
            res.render("./campgrounds/show", { campground: pickedCampground });
        }
    })
})

// CREATE ROUTE
router.post("/campgrounds", function (req, res) {
    Campground.create(req.body.campground, function (err, newlyAdded) {
        if (err) throw err;
        else {
            res.redirect("/campgrounds");
        }
    })
})

module.exports = router;