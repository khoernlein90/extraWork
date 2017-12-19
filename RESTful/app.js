var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
mongoose.connect("mongodb://localhost/blog_app");

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
})

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function(req, res){
    res.redirect("blogs");
})

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err) throw err;
        else {
            res.render("index", {blogs: blogs});
        }
    })
})

app.listen(3000, function(){
    console.log("Server up and running")
})