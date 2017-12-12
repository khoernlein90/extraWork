var playerOneButton = document.querySelector(".playerOne");
var playerTwoButton = document.querySelector(".playerTwo");
var player1Score = document.querySelector("#p1Score");
var player2Score = document.querySelector("#p2Score");
var resetButton = document.querySelector(".reset");
var numInput = document.querySelector("#number");
var limit = document.querySelector(".limit");
var gameOver = false;

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

numInput.addEventListener("change", function(){
    winningScore = Number(numInput.value);    
    limit.textContent = winningScore;
    reset();
})

playerOneButton.addEventListener("click", function(){
    if (!gameOver){
        p1Score += 1;
        if (p1Score === winningScore){
            player1Score.classList.add("winner");
            gameOver = true;
        }
        player1Score.textContent = p1Score;        
    }
})
playerTwoButton.addEventListener("click", function(){
    if (!gameOver){
        p2Score += 1;  
        if (p2Score === winningScore){
            player2Score.classList.add("winner");
            gameOver = true;
        }   
        player2Score.textContent = p2Score;        
    }
})
resetButton.addEventListener("click", function(){
   reset();
})

function reset (){
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = p1Score;  
    player2Score.textContent = p2Score;       
    player1Score.classList.remove("winner");    
    player2Score.classList.remove("winner");    
    gameOver = false; 
}