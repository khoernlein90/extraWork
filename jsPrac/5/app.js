// var movies = [
//     {
//         title: "Point Break",
//         Rating: 10,
//         haveSeen: true
//     },
//     {
//         title: "The Godfather",
//         Rating: 9,
//         haveSeen: false
//     },
//     {
//         title: "The Departed",
//         Rating: 10,
//         haveSeen: true
//     }
// ];

// for (var i = 0; i < movies.length; i++) {
//     if (movies[i].haveSeen === true) {
//         console.log("You have watched " + movies[i].title + " - " + movies[i].Rating + " Rating.")
//     } else {
//         console.log("You have not watched " + movies[i].title + " - " + movies[i].Rating + " Rating.")
//     }
// }
// movies.forEach(function(movies){
//     console.log(movies.Rating)
//     if (movies.haveSeen === true){
//         console.log("youve seen " + movies.title + " -" + movies.Rating + " Rating.")
//     } else {
//         console.log("you havent seen " + movies.title + " -" + movies.Rating + " Rating.")

//     }
// })

var isPurple = false;

var button = document.querySelector("button");
button.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = "white";
        // isPurple = false;
    } else {
        document.querySelector("body").style.background = "purple";
        // isPurple = true;
    }
    isPurple = !isPurple;
})