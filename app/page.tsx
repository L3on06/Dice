'use client'

import { useState } from 'react';
import "./globals.css";
import Image from "next/image";

export default function Home() {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');
  const [player1Image, setPlayer1Image] = useState<string>('/source/images/dice6.png');
  const [player2Image, setPlayer2Image] = useState<string>('/source/images/diceR6.png');
  const [namesEntered, setNamesEntered] = useState<boolean>(false);

  const validateNameType = (playerName: string): boolean => {
    const regex: RegExp = /^[a-zA-Z]+$/;
    return regex.test(playerName);
  };

  const validateNameZeroSymbol = (playerName: string): boolean => {
    const regex: RegExp = /^[a-zA-Z\s]*$/;
    return regex.test(playerName);
  };

  const handleStartGame = () => {
    if (!namesEntered) {
      let name1 = prompt("What is your name Player 1") || '';
      let name2 = prompt("What is your name Player 2") || '';

      while (true) {
        if (name1.length > 0 && name1.length <= 10 && validateNameType(name1) && validateNameZeroSymbol(name1) && name2.length > 0 && name2.length <= 10 && validateNameType(name2) && validateNameZeroSymbol(name2)) {
          setPlayer1(name1);
          setPlayer2(name2);
          setNamesEntered(true);
          break;
        } else {
          if (name1.length === 0 || name1.length > 10 || !validateNameType(name1) || !validateNameZeroSymbol(name1)) {
            name1 = prompt("Invalid input for Player 1. Please enter a valid name (up to 10 characters, only letters, no symbols)") || '';
          }
          if (name2.length === 0 || name2.length > 10 || !validateNameType(name2) || !validateNameZeroSymbol(name2)) {
            name2 = prompt("Invalid input for Player 2. Please enter a valid name (up to 10 characters, only letters, no symbols)") || '';
          }
        }
      }
    }

    // Add logic to show dice animation and play sound
    const buttonStart = document.getElementById("buttonstart");
    const buttonEnd = document.getElementById("buttonend");

    if (buttonStart && buttonEnd) {
      buttonStart.style.display = "none";
      buttonEnd.style.display = "block";

      const dice_shake = new Audio("/source/audio/dice_shake.mp3");
      dice_shake.play();

      const a1 = document.querySelector(".img1") as HTMLElement;
      const a2 = document.querySelector(".img2") as HTMLElement;
      if (a1 && a2) {
        a1.style.animation = "rotate-center 1s linear both infinite";
        a2.style.animation = "rotate-center 1s linear both infinite";
      }
    }
  };

  const handleEndGame = () => {
    // Add logic to end the game if needed

    // Add logic to show end game animation and play sound
    const buttonStart = document.getElementById("buttonstart");
    const buttonEnd = document.getElementById("buttonend");

    if (buttonStart && buttonEnd) {
      buttonEnd.style.display = "none";
      buttonStart.style.display = "block";

      const dice_roll = new Audio("/source/audio/dice_roll.mp3");
      dice_roll.play();

      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomImageSource = `/source/images/dice${randomNumber1}.png`;
      setPlayer1Image(randomImageSource);

      const randomNumber2 = Math.floor(Math.random() * 6) + 1;
      const randomImageSource2 = `/source/images/diceR${randomNumber2}.png`;
      setPlayer2Image(randomImageSource2);

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

      const a1 = document.querySelector(".img1") as HTMLElement;
      const a2 = document.querySelector(".img2") as HTMLElement;
      if (a1 && a2) {
        a1.style.animation = "rotate-end 1s linear both";
        a2.style.animation = "rotate-end 1s linear both";
      }
    }
  };

  return (
    <div className="container">
      <header className="dgrid">
        <h1 className="title"> 🎲 &nbsp; Dicee &nbsp; 🎲 </h1>
      </header>

      <main>
        <section className="mainContainer ">
          <figure className="dice main-animation dgrid">
            <figcaption>
              <p className="paragraf" id="Player1Name">{player1 || "Player 1"}</p>
            </figcaption>
            <Image id="imgPlayer1" className="img img1" src={player1Image} alt="Dice" width={200} height={200} key={player1Image} priority />
          </figure>

          <figure className="dice dgrid">
            <figcaption>
              <p className="paragraf" id="Player2Name">{player2 || "Player 2"}</p>
            </figcaption>
            <Image id="imgPlayer2" className="img img2" src={player2Image} alt="DiceR6" width={200} height={200} key={player2Image} />
          </figure>
        </section>

        <section>
          <button id="buttonstart" className="button" onClick={handleStartGame}>Start</button>
          <button id="buttonend" className="button" onClick={handleEndGame}>End</button>
        </section>

        <section className="github">
          <a href="https://github.com/L3on06" target="_blank">
            <figure>
              {/* <img src="/source/images/github.svg" alt="Github" /> */}
            </figure>
          </a>
        </section>
      </main>

      {/* <!-- Background animation --> */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}