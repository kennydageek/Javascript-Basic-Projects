const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Write a function that returns six random elements from an array

const randomHex = function (arr) {
  // let stringHexcode = '';
  let hexcode = [];
  let random = Math.floor(Math.random() * hex.length);

  for (let i = 0; i < 6; i++) {
    hexcode.push(arr[random]);
    random = Math.floor(Math.random() * hex.length);
  }

  const stringHexcode = hexcode.reduce((acc, cur) => acc + cur, "#");

  return stringHexcode;
};

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  document.body.style.background = randomHex(hex);
  color.textContent = randomHex(hex);
});
