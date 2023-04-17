'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector('.change-color');
const background = document.querySelector('.color');
const body = document.querySelector('body')
const widget = document.querySelector('.widget')
changeColorButton.addEventListener('click', onClick);
function onClick() {
  let color = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  background.textContent = body.style.backgroundColor;
}