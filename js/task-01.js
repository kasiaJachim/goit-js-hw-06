'use strict'
const allCategories = document.querySelectorAll('li.item');
console.log(allCategories);

const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryNumbers = category.querySelectorAll('li').length;
    console.log(`Categories: ${categoryName}`);
    console.log(`Elements: ${categoryNumbers}`);
})