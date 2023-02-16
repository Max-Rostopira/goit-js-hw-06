"use strict";

const totalCategoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategoryEl.length}`);

const AllEl = document.querySelectorAll('#categories>li');
AllEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});