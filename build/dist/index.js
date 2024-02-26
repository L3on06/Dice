let player1 = "";
let player2 = "";
let namesEntered = false;
const buttonStart = document.querySelector("#buttonstart");
const buttonEnd = document.querySelector("#buttonend");
function validateNameType(playerName) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(playerName);
}
function validateNameZeroSymbol(playerName) {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(playerName);
}
if (buttonStart && buttonEnd) {
  buttonStart.addEventListener("click", function() {
    if (!namesEntered) {
      player1 = prompt("What is your name Player 1") || "";
      player2 = prompt("What is your name Player 2") || "";
      while (true) {
        if (player1.length > 0 && player1.length <= 10 && validateNameType(player1) && validateNameZeroSymbol(player1) && player2.length > 0 && player2.length <= 10 && validateNameType(player2) && validateNameZeroSymbol(player2)) {
          namesEntered = true;
          break;
        } else {
          if (player1.length === 0 || player1.length > 10 || !validateNameType(player1) || !validateNameZeroSymbol(player1)) {
            player1 = prompt("Invalid input for Player 1. Please enter a valid name (up to 10 characters, only letters, no symbols)") || "";
          }
          if (player2.length === 0 || player2.length > 10 || !validateNameType(player2) || !validateNameZeroSymbol(player2)) {
            player2 = prompt("Invalid input for Player 2. Please enter a valid name (up to 10 characters, only letters, no symbols)") || "";
          }
        }
      }
      const player1Name = document.getElementById("Player1Name");
      const player2Name = document.getElementById("Player2Name");
      if (player1Name && player2Name) {
        player1Name.innerHTML = player1;
        player2Name.innerHTML = player2;
      }
    }
    if (buttonStart && buttonEnd) {
      buttonStart.style.display = "none";
      buttonEnd.style.display = "block";
      const dice_shake = new Audio("./source/audio/dice_shake.mp3");
      dice_shake.play();
      const a1 = document.querySelector(".img1");
      const a2 = document.querySelector(".img2");
      if (a1 && a2) {
        a1.style.animation = "rotate-center 1s linear both infinite";
        a2.style.animation = "rotate-center 1s linear both infinite";
      }
    }
  });
  buttonEnd.addEventListener("click", () => {
    if (buttonEnd && buttonStart) {
      buttonEnd.style.display = "none";
      buttonStart.style.display = "block";
      const dice_roll = new Audio("./source/audio/dice_roll.mp3");
      dice_roll.play();
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomImageSource = "./source/images/dice" + randomNumber1 + ".png";
      const image1 = document.querySelector(".img1");
      if (image1) {
        image1.setAttribute("src", randomImageSource);
      }
      const randomNumber2 = Math.floor(Math.random() * 6) + 1;
      const randomImageSource2 = "./source/images/diceR" + randomNumber2 + ".png";
      const image2 = document.querySelector(".img2");
      if (image2) {
        image2.setAttribute("src", randomImageSource2);
      }
      const headingElement = document.querySelector("h1");
      if (headingElement) {
        if (randomNumber1 > randomNumber2) {
          headingElement.innerHTML = "🎉🏆🎉" + player1 + "  Wins!";
        } else if (randomNumber2 > randomNumber1) {
          headingElement.innerHTML = player2 + " Wins 🎉🏆🎉";
        } else {
          headingElement.innerHTML = "Draw!";
        }
      }
      const a1 = document.querySelector(".img1");
      const a2 = document.querySelector(".img2");
      if (a1 && a2) {
        a1.style.animation = "rotate-end 1s ease-in-out both ";
        a2.style.animation = "rotate-end 1s ease-in-out both ";
      }
    }
  });
}
