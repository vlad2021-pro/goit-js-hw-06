function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector(".change-color");
const colorValue = document.querySelector('.color');
const bodyNode = document.querySelector('body');

button.addEventListener('click', (event) => {
  bodyNode.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyNode.style.backgroundColor;
})