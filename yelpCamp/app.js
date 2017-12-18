var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Hither Hills State Park", image: "https://media.timeout.com/images/103292095/380/285/image.jpg"},
        {name: "Minnewaska State Park Preserve", image: "https://media.timeout.com/images/103291963/380/285/image.jpg"},
        {name: "North-South Lake Campground", image: "https://media.timeout.com/images/102769919/380/285/image.jpg"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds})
})

app.listen(3000, function(){
    console.log("we out here")
})