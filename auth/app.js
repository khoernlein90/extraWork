var express               = require("express");
var mongoose              = require("mongoose");
var passport              = require("passport");
var bodyParser            = require("body-parser");
var User                  = require("./models/user");
var LocalStrategy         = require("passport-local");
var expressSession        = require("express-session");
var passportLocalMongoose = require("passport-local-mongoose");

var app = express();
mongoose.connect("mongodb://localhost/auth_app", {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession({
    secret: "Secret secret, I got a secret!",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.get("/", function(req, res){
    res.render("home");
})

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret")
})

app.get("/register", function(req, res){
    res.render("register")
})

app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if (err) throw err;
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        })
    })
})

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(res, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated() && req.usedStrategy === 'local-user'){
        next()
    } else {
        res.redirect("/login")               
    }
}

app.listen(3000, function(){
    console.log("server up and running")
})