var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
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

app.get("/", function (req, res) {
    res.redirect("blogs");
})

app.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) throw err;
        else {
            res.render("index", { blogs: blogs });
        }
    })
})

app.get("/blogs/new", function (req, res) {
    res.render("new");
})

app.post("/blogs", function (req, res) {
    Blog.create(req.body.blog, function (err, newBlod) {
        if (err) throw err;
        else {
            res.redirect("/blogs");
        }
    })
})

app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, blogPost) {
        if (err) throw err;
        else {
            console.log(blogPost)
            res.render("show", { blog: blogPost });

        }
    })
})

app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) throw err;
        else {
            res.render("edit", {blog: foundBlog})
        }
    })
})

app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err) throw err;
        else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
})

app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err) throw err;
        else{
            res.redirect("/blogs")
        }
    })
})

app.listen(3000, function () {
    console.log("Server up and running")
})