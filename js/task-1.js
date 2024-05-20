const categories = document.querySelectorAll('ul#categories>li.item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const heading = category.querySelector('h2');
  console.log(`Category: ${heading.textContent}`);

  const elements = category.querySelectorAll('ul>li');
  console.log(`Elements: ${elements.length}`);
}
