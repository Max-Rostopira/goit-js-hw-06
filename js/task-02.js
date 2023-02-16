"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const listEl = document.querySelector('#ingredients');


const ingredientsEls = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

listEl.insertAdjacentHTML('afterbegin', ingredientsEls);

// let ingredientsEls = [];

// for (let ingredient of ingredients) {
//   let listEl = document.createElement('li');
//   listEl.classList.add('item');
//   listEl.innerHTML = ingredient;
//   ingredientsEls.push(listEl);
// }

// ingredientsList.append(...ingredientsEls);
// console.log(ingredientsList);













