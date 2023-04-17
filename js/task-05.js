'use strict'
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(input);
input.addEventListener('input', (e) => {
    if (input.value === '') {
       output.textContent='Anonymous';  
    }else
    
    return output.textContent=input.value;
});