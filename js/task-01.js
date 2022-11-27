const categoriesNumberRef = document.querySelectorAll('.item');
const titlesOfCategoriesRef = document.querySelectorAll('.item h2');
const elementsOfCategoriesRef = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categoriesNumberRef.length}`);
console.log(`Category: ${titlesOfCategoriesRef[0].textContent}`);
console.log(
  `Elements: ${elementsOfCategoriesRef[0].querySelectorAll('li').length}`
);
console.log(`Category: ${titlesOfCategoriesRef[1].textContent}`);
console.log(
  `Elements: ${elementsOfCategoriesRef[1].querySelectorAll('li').length}`
);
console.log(`Category: ${titlesOfCategoriesRef[2].textContent}`);
console.log(
  `Elements: ${elementsOfCategoriesRef[2].querySelectorAll('li').length}`
);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
