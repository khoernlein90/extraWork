var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Rocky Peak",
        image: "http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/06/camping-tent-1500x1000.png",
        description: "A great place to visit!"
    },
    {
        name: "Salt Flats",
        image: "https://sofrep.com/wp-content/uploads/2017/03/featured-image-6-905x484.jpg",
        description: "So much open terrain!!"
    },
    {
        name: "Heaven's Rest",
        image: "http://cdn1.theinertia.com/wp-content/uploads/2015/07/Tent1.jpg",
        description: "Beautiful Landscape!"
    }
]

function seedDB() {
    Campground.remove({}, function (err) {
        if (err) throw err;
        else {
            console.log("removed campgrounds")
        }
    }).then(function () {
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) throw err;
                else {
                    console.log("added a campground")
                    Comment.create({
                        text: "Great place, wish it had internet!",
                        author: "Homer"
                    }, function(err, comment){
                        if (err) throw err;
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("added a comment")
                        }
                    })
                }
            })
        })
    })
}
module.exports = seedDB;