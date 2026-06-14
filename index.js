var playerOne = document.querySelector(".one");
var playerTwo = document.querySelector(".two");
var header = document.querySelector("h1");

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var image = document.querySelector(".img1");
image.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var image = document.querySelector(".img2");
image.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player1 wins"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player2 wins"
} else {
    document.querySelector("h1").innerHTML = "it a DRAW!"
}