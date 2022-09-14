let player_1 = prompt("What is your name Player 1");
let player_2 = prompt("What is your name Player 2");

var player1 = player_1;
var player2 = player_2;
  
if (player1.length > 10) player1 = player1.substring(0, 10);
if (player2.length > 10) player2 = player2.substring(0, 10);

document.getElementById('Player1').innerHTML = player1;
document.getElementById('Player2').innerHTML = player2;
const body = document.querySelector('body')
const container = document.querySelector('.container')
body.style.animation = "main-animation 2.5s both";
container.style.animation = "main-animation 3.5s both";


const button = document.querySelector("#buttonend");

button.addEventListener('click', () => {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "./source/images/dice" + randomNumber1 + ".png";
   
  var image1 = document.querySelector(".img1");  

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "./source/images/diceR" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 " + player1 + "  Wins!";
    document.getElementById("Player1").innerHTML = player1 + "🥇";
    document.getElementById("Player2").innerHTML = player2 + "🥈";
  }
  
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " Wins 🏆";
    document.getElementById("Player1").innerHTML = player1 + "🥈";
    document.getElementById("Player2").innerHTML = player2 + "🥇" ;
  }
    
else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementById("Player1").innerHTML = player1 + "🏅";
    document.getElementById("Player2").innerHTML = player2 + "🏅";
  }
});

const dice_shake = new Audio("./source/audio/dice_shake.mp3");
const dice_roll = new Audio("./source/audio/dice_roll.mp3");

const roll = buttonstart.addEventListener("click", function () {
  buttonstart.style.display = "none";
  buttonend.style.display = "block";

  dice_shake.play();

  a1.style.animation = "rotate-center 1s ease-in-out both infinite";
  a2.style.animation = "rotate-center 1s ease-in-out both infinite";
});

const end = buttonend.addEventListener("click", function () {
  buttonend.style.display = "none";
  buttonstart.style.display = "block";

  dice_roll.play();

  a1.style.animation = "rotate-end 1s ease-in-out both ";
  a2.style.animation = "rotate-end 1s ease-in-out both ";
});

