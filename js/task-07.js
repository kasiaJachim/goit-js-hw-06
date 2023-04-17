'use strict'
const fontSizeControle = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
fontSizeControle.addEventListener('input', (e) => {
    inputText.style.fontSize = e.target.value + 'px';
});
