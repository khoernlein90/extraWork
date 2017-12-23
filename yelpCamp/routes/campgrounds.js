var Campground = require("../models/campground");
var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

// INDEX ROUTE
router.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("./campgrounds/index", { campgrounds: allCampgrounds })
        }
    })
})

// NEW ROUTE
router.get("/campgrounds/new", middleware.isLoggedIn, function (req, res) {
    res.render("./campgrounds/new");
})

// SHOW ROUTE
router.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, pickedCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("./campgrounds/show", { campground: pickedCampground });
        }
    })
})

// CREATE ROUTE
router.post("/campgrounds", middleware.isLoggedIn, function (req, res) {
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        author: author
    }

    Campground.create(newCampground, function (err, newlyAdded) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    })
})

router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err)
        } else {
            res.render("./campgrounds/edit", {campground: campground});
        }
    })
})

router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err){
            console.log(err)
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
})

router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds")
        } else {
            req.flash("success", "Deleted campground");
            res.redirect("/campgrounds")            
        }
    })
})

module.exports = router;