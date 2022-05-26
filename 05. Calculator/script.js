'use strict';
// Global Variable Space
let displayNumber = document.querySelector('.input__number');
const inputNumberArr = document.querySelectorAll('.input-number__number')

for (let i = 0; i < inputNumberArr.length; i++) {
    inputNumberArr[i].addEventListener('click', function () {
        if (inputNumberArr[i].textContent === 'C') {
            displayNumber.textContent = '';
        } else if (inputNumberArr[i].textContent === '=') {
            displayNumber.textContent = eval(displayNumber.textContent);
        } else {
            displayNumber.textContent += inputNumberArr[i].textContent;
        }
    })
}
