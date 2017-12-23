var Campground = require("../models/campground");
var Comment = require("../models/comment");
var express = require("express");
var router = express.Router();
// NEW COMMENT ROUTE / FORM
router.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) throw err;
        else {
            res.render("./comments/new", { campground: campground });
        }
    })
})

// SEND NEW COMMENT DATA TO SPECIFIC CAMPGROUND
router.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
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

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;