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
