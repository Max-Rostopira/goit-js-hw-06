const inputEl = document.querySelector('#validation-input');
const lengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', event => {
    if (lengthEl === Number(event.target.value.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
});

