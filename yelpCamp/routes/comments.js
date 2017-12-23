var Campground = require("../models/campground");
var Comment = require("../models/comment");
var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

// NEW COMMENT ROUTE / FORM
router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) throw err;
        else {
            res.render("./comments/new", { campground: campground });
        }
    })
})

// SEND NEW COMMENT DATA TO SPECIFIC CAMPGROUND
router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) throw err;
        else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) throw err;
                else {
                    // console.log(req.user)
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save()
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        }
    })
})
// EDIT COMMENT FORM
router.get("/campgrounds/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: comment});
        }
    })
})
// SEND UPDATED DATA BACK
router.put("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment){
        if (err){
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
})

router.delete("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if (err){
            res.redirect("back");
        } else {
            req.flash("success", "Deleted comment");
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
})

module.exports = router;