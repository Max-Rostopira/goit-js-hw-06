const inputEl = document.querySelector('#name-input');
const valueEl = document.querySelector('#name-output');

inputEl.addEventListener('focus', event => {
    event.target.style.outline = '2px solid red';
    event.target.style.borderRadius = '5px'
})

inputEl.addEventListener('blur', event => {
    event.target.style.outline = 'none';
})

inputEl.addEventListener('input', event => {
    if (event.target.value === '') {
        valueEl.textContent = 'Anonymous';
    } else {
        valueEl.textContent = event.target.value; 
    }
})
