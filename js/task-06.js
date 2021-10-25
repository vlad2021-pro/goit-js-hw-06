
const inputNode = document.querySelector("#validation-input");

inputNode.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === +inputNode.dataset.length) {
        inputNode.classList.add('valid');
        inputNode.classList.remove('invalid');
    } else {
        inputNode.classList.add('invalid');
        inputNode.classList.remove('valid');
    }
})
console.log(+inputNode.dataset.length);