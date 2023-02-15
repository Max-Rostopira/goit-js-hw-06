let counterValue = 0;
const brtDecrementEl = document.querySelector('[data-action="decrement"]');
const brtIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

brtDecrementEl.addEventListener('click', () => {
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue
})

brtIncrementEl.addEventListener('click', () => {
    counterValue = counterValue + 1;
    valueEl.textContent = counterValue
})
