"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredientsList = document.querySelector('#ingredients');

let ingredientsEls = [];

for (let ingredient of ingredients) {
  let listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.innerHTML = ingredient;
  ingredientsEls.push(listEl);
}

ingredientsList.append(...ingredientsEls);
console.log(ingredientsList);













