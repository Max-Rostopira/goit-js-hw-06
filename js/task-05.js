const inputEl = document.querySelector('#name-input');
const valueEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    if (event.target.value === '') {
        valueEl.textContent = 'Anonymous';
    } else {
        valueEl.textContent = event.target.value; 
    }
})
