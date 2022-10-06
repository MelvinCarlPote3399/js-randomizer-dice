var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var player1 = "Starting Files/images/dice" + randomNumber1 + ".png";
var player2 = "Starting Files/images/dice" + randomNumber2 + ".png";

document.querySelector(".player .dice1").setAttribute("src", player1);
document.querySelector(".player .dice2").setAttribute("src", player2);

if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}

else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
