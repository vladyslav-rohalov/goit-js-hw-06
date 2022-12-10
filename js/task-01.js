const categoriesNumberRef = document.querySelectorAll('.item');
const titlesOfCategoriesRef = document.querySelectorAll('.item h2');

console.log(`Number of categories: ${categoriesNumberRef.length}`);
for (const title of titlesOfCategoriesRef) {
  console.log(`Category: ${title.textContent}`);
  console.log(title.nextElementSibling.children.length);
}
