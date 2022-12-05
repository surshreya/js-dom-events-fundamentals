"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

/**
 * Open the Modal Window
 */
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

/**
 * Close the modal window
 */

closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
