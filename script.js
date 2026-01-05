"use strict";

let face = "heads";

const faceText = document.querySelector('[data-name="faceText"]');
const coinImage = document.querySelector('[data-name="coinImage"]');

document
  .querySelector('[data-name="button"]')
  .addEventListener("click", function () {
    let faceNumber = Math.round(Math.random());
    if (faceNumber === 1) {
      face = "heads";
      faceText.textContent = "Heads";
      coinImage.src = "resources/heads.svg";
    } else if (faceNumber === 0) {
      face = "tails";
      faceText.textContent = "Tails";
      coinImage.src = "resources/tails.svg";
    } else {
      console.log("ERROR");
    }
  });
