"use strict";
// const totalCategoriesEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategoriesEl.length}`);

// const animalCategoriesEl = document.querySelectorAll('h2');
// console.log(`Category: ${animalCategoriesEl[0].textContent}`);

// const totalAnimalEl = totalCategoriesEl[0].querySelectorAll('ul > li')
// console.log(`Elements: ${totalAnimalEl.length}`)

// const productsCategoriesEl = document.querySelectorAll('h2');
// console.log(`Category: ${productsCategoriesEl[1].textContent}`);

// const ProductsAnimalEl = totalCategoriesEl[1].querySelectorAll('ul > li')
// console.log(`Elements: ${ProductsAnimalEl.length}`)

// const TechnologiesCategoriesEl = document.querySelectorAll('h2');
// console.log(`Category: ${TechnologiesCategoriesEl[2].textContent}`);

// const TechnologiesAnimalEl = totalCategoriesEl[2].querySelectorAll('ul > li')
// console.log(`Elements: ${TechnologiesAnimalEl.length}`)

const totalCategoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategoryEl.length}`);

const AllEl = document.querySelectorAll('#categories>li');
AllEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});