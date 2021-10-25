const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const itemsList = ingredients.map(element => {

  const titleElement = document.createElement('li');
  titleElement.classList.add('item');
  titleElement.textContent = element;
  
  return titleElement;
 })

ingredientsList.append(... itemsList);
console.log(ingredientsList);