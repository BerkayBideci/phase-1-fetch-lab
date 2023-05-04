function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  const pages = []
  books.forEach(book => pages.push(book.numberOfPages))
  console.log(pages.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
  console.log(books[4])
  const characters = []
  books.forEach(book => characters.push(book.characters))
  for (let character of characters) {
    for (let characterNested of character) {
      if (characterNested === "https://anapioficeandfire.com/api/characters/1031")
        console.log(characterNested)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
