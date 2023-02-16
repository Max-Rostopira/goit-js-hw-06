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












