'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
let count = 0;
let size = 0;

function createBox() {
  const amount = input.value;
  const markup = [];
  for (let i = 0; i < amount; i++){
    const divBox = document.createElement('div');
    size += size > 0 ? 10 : 30;

    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    markup.push(divBox);
  }
  boxes.append(...markup);
}
const destroyBox = () => {
  boxes.innerHTML = '';
  input.value = '';
  size = 0;
  count = 0;

};

createButton.addEventListener('click', createBox);
destroyButton.addEventListener('click', destroyBox);
