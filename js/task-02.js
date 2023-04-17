'use strict'
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');

const ingredientsListRef = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
});

ingredientsRef.append(...ingredientsListRef);


