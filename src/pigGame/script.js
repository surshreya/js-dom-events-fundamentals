"use strict";

/**
 * Selecting elements
 */
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector(".current-score--0");
const current1El = document.querySelector(".current-score--1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const diceEl = document.querySelector(".dice");

/**
 * Initialization
 */

let currentScore, activePlayer, scores;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

init();

/**
 * Resetting the Game
 */

btnNew.addEventListener("click", init);

/**
 * Passes the control to the next player
 */
const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`.current-score--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

/**
 * Rolling the dice, Playing the Game
 */
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll number between 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice image
  if (diceEl.classList.contains("hidden")) {
    diceEl.classList.remove("hidden");
  }
  diceEl.src = `./public/img/dice-${dice}.png`;

  if (dice === 1) {
    // Switch the Player
    switchPlayer();
  } else {
    // Add dice to the current score
    currentScore += dice;
    document.querySelector(`.current-score--${activePlayer}`).textContent =
      currentScore;
  }
});
