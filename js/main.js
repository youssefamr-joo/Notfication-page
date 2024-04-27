"use strict";
const btn = document.querySelector(".btn");
const notfiCards = document.querySelectorAll(".notfication-card");
const dots = document.querySelectorAll(".red-point");
const countBox = document.querySelector(".sec-number");
const unreadBoxes = document.querySelectorAll(".blue-bg");
let counter = unreadBoxes.length;
countBox.innerHTML = counter;

btn.addEventListener("click", () => {
  notfiCards.forEach((card) => {
    card.classList.remove("blue-bg");
  });
  dots.forEach((dot) => {
    dot.style.display = "none";
  });
  countBox.innerHTML = "0";
});

unreadBoxes.forEach((card) => {
  if (card.classList.contains("blue-bg")) {
    card.addEventListener("click", () => {
      card.classList.remove("blue-bg");
      const redPoint = card.querySelector(".red-point");
      redPoint.style.display = "none";
      handleCounter();
    });
  }
});

function handleCounter() {
  if (counter >= 1) {
    counter--;
  }
  countBox.innerHTML = counter;
}
