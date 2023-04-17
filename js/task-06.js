'use strict'
const inputText = document.querySelector('#validation-input');
const checkValue = inputText.getAttribute('data-length');
inputText.addEventListener('blur', (event) => {
    if (inputText.value.length >= checkValue) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid')
    }else{
        inputText.classList.remove('valid');
        inputText.classList.add('invalid')
  }
});