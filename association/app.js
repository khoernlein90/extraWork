var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/posts_app");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts : [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User ({
//     name: "Shannon",
//     email: "Shannon@Shannon.com"
// })

// newUser.posts.push({
//     title: "Wassup baby",
//     content: "Hi love"
// })
User.findOne({name: "Shannon"}, function(err, user){
    if (err) throw err;
    else {
        // console.log(user)
        user.posts.push({
            title: "Second Post!!",
            content: "We out here!!"
        })
        user.save(function(err, user){
            if (err) throw err;
            else {
                console.log(user)
            }
        })
    }
})

// newUser.save(function(err, user){
//     if (err) throw err;
//     else {
//         console.log(user)
//     }
// })