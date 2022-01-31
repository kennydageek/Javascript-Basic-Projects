let value = document.querySelector("#value");
let btnDecrease = document.querySelector(".decrease");
let btnIncrease = document.querySelector(".increase");
let btnReset = document.querySelector(".reset");

let count = 0;

const btn = document.querySelector(".button-container");
btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("increase")) {
    count++;
    value.textContent = count;

    if (count >= 1) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "#222";
    } else {
      value.style.color = "red";
    }
  } else if (e.target.classList.contains("decrease")) {
    count--;
    value.textContent = count;

    if (count >= 1) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "#222";
    } else {
      value.style.color = "red";
    }
  } else if (e.target.classList.contains("reset")) {
    count = 0;
    value.textContent = count;
    value.style.color = "#222";
  }
});

const btns = document.querySelectorAll(".btn");
