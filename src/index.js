import {sumOne, countToZero} from './calculator.js';

const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', sumOne);
resetBtn.addEventListener('click', countToZero);
