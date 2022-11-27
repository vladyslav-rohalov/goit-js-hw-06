const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');

  return ingredient;
});

document.querySelector('#ingredients').append(...ingredientsList);
