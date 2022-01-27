let value = document.querySelector("#value");
let btnDecrease = document.querySelector(".decrease");
let btnIncrease = document.querySelector(".increase");
let btnReset = document.querySelector(".reset");

let count = 0;

// console.log(value);
// Implementing The Increase Button
btnIncrease.addEventListener("click", function () {
  count++;
  value.textContent = count;

  if (count >= 1) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "#222";
  } else {
    value.style.color = "red";
  }
});

// Implementing The Decrease Button
btnDecrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count >= 1) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "#222";
  } else {
    value.style.color = "red";
  }
});

// Implementing The Reset Button

btnReset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  value.style.color = "#222";
});

// This code need to be refactored but i have not done advanced DOM. MY THOUGHT IS There should be a way to loop over the buttons and put the conditions there.
// Will revisit this code later
