var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root Route
router.get("/", function (req, res) {
    res.render("landing");
})
//Register Form
router.get("/register", function (req, res) {
    res.render("register");
})
//Register form data
router.post("/register", function (req, res) {
    var newUser = ({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            
            req.flash("error", err.message);
            res.redirect("back");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/campgrounds");
        })
    })
})

//Login form
router.get("/login", function (req, res) {
    res.render("login");
})
//Login authenication
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
        badRequestMessage : 'Missing username or password.',
        failureFlash: true
    }), function (req, res) {
    });
//Logout route
router.get("/logout", function (req, res) {
    req.flash("success", "Successfully logged you out");
    req.logout();
    res.redirect("/campgrounds");
})

module.exports = router;