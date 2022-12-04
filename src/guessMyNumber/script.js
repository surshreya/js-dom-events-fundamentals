"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

const clearInput = () => {
  document.querySelector(".guess").value = "";
};

// Playing the Game
document.querySelector(".check").addEventListener("click", function (e) {
  const guess = Number(document.querySelector(".guess").value);

  // Incase of no input
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    //Player Wins by guessing right number
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = guess;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //Player guesses the wrong number

    if (score > 1) {
      //Game ongoing
      displayMessage(guess > secretNumber ? "📈 Too high" : " 📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
      clearInput();
    } else {
      //Tries are over
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      clearInput();
    }
  }
});

// Resetting the game
document.querySelector(".again").addEventListener("click", function (e) {
  score = 20;
  highScore = 0;

  displayMessage("Start guessing ...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  clearInput();

  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
