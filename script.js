"use strict";

const faceText = document.querySelector('[data-name="faceText"]');
const coinImage = document.querySelector('[data-name="coinImage"]');
const button = document.querySelector('[data-name="button"]');

let flipTimeout; // store the timeout ID

button.addEventListener("click", () => {
  // Cancel any existing flip timeout to allow retriggering
  if (flipTimeout) {
    clearTimeout(flipTimeout);
    coinImage.classList.remove("animate-flip");
  }

  // Force reflow so animation can restart
  void coinImage.offsetWidth;

  // Start the flip animation
  coinImage.classList.add("animate-flip");

  // Decide heads or tails randomly
  const isHeads = Math.random() < 0.5;

  // After 2 seconds (animation duration), update coin face and remove animation
  flipTimeout = setTimeout(() => {
    coinImage.classList.remove("animate-flip"); // ready for next flip

    if (isHeads) {
      coinImage.src = "resources/heads.svg";
      faceText.textContent = "Heads";
    } else {
      coinImage.src = "resources/tails.svg";
      faceText.textContent = "Tails";
    }

    flipTimeout = null; // reset timeout variable
  }, 450); // match Tailwind animation duration
});
