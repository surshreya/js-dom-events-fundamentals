"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/**
 * Open the Modal Window
 */
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

/**
 * Close the modal window on X button
 */
closeModalBtn.addEventListener("click", closeModal);

/**
 * Close the modal window when clicked outside the modal
 */
overlay.addEventListener("click", closeModal);
