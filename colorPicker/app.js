var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messeageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector(".easyBtn")
var hardBtn = document.querySelector(".hardBtn")

easyBtn.addEventListener("click", function(){
    numSquares = 3;
    colors = generateRandomColors(numSquares)
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
})
resetButton.addEventListener("click", function(){
    //GENERTE NEW COLORS
    colors = generateRandomColors(numSquares);
    //PICK NEW RANCOM COLOR
    pickedColor = pickColor();
    //CHANGE COLORDISPLAY TO MATCH PICKED COLOR
    colorDisplay.textContent = pickedColor;
    //CHANGE COLORS OF SQUARES
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //ADD COLORS TO SQUARES
    squares[i].style.backgroundColor = colors[i];
    // ADD CLICK LISTENER TO SQUARES
    squares[i].addEventListener("click", function(){
        // GRAB COLOR OF PICKED SQUARE
        var clickedColor = this.style.backgroundColor;
        // COMPARE COLOR
        if (clickedColor === pickedColor) {
            messeageDisplay.textContent = "Correct";
            h1.style.backgroundColor = pickedColor;
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messeageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color){
    //LOOP THROUGH ALL SQUARES
    for (var i = 0; i < squares.length; i++) {
        // CHANGE COLOR TO MATCH GIVEN COLOR        
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //MAKE AN ARRAY
    var arr = [];
    //ADD NUM RANDOM COLORS TO ARRAY
    for (var i = 0; i < num; i++) {
        // GET RANDOM COLOR AND PUSH INTO ARRAY
        arr.push(randomColor());
    }
    //RETURN THAT ARRAY
    return arr;
}

function randomColor(){
    //PICK A "RED" FROM 0 - 255
    var r = Math.floor(Math.random() * 256);
    //PICK A "GREEN" FROM 0 - 255
    var g = Math.floor(Math.random() * 256);    
    //PICK A "BLUE" FROM 0 - 255
    var b = Math.floor(Math.random() * 256);   
    return "rgb(" + r + ", " + g + ", " + b + ")";
}