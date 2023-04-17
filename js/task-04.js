'use strict'
let counterVoule = 0;
const vouleRef = document.querySelector('span');
const addVolueButton = document.querySelector('button[data-action="increment"]');
const subVolueButton = document.querySelector('button[data-action="decrement"]');
const btn = document.querySelector('button');

addVolueButton.addEventListener('click', () => {
    counterVoule++;
    vouleRef.textContent = counterVoule;
});
subVolueButton.addEventListener('click', () => {
    counterVoule--;
    vouleRef.textContent = counterVoule;
})
