var express          = require("express");
var app              = express();
var bodyParser       = require("body-parser");
var mongoose         = require("mongoose");
var passport         = require("passport");
var LocalStrategy    = require("passport-local");
var Campground       = require("./models/campground");
var Comment          = require("./models/comment");
var User             = require("./models/user")
var seedDB           = require("./seed");

var commentRoutes    = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var authRoutes       = require("./routes/index");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

seedDB();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {
    useMongoClient: true
});

// PASSPORT CONFIG
app.use(require("express-session")({
    secret: "It's all about the U",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

app.use(commentRoutes);
app.use(campgroundRoutes);
app.use(authRoutes);

app.listen(3000, function () {
    console.log("we out here")
})