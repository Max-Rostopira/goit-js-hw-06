const inputEl = document.querySelector('#font-size-control');
const valueEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
    let size = inputEl.value;
    valueEl.style.fontSize = size + 'px'
})