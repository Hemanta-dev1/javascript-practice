let books = [
  {
    title: "harry poter",
    authorName: "hemanta",
    releaseYear: 1945,
  },
  {
    title: "GOT",
    authorName: "Mike",
    releaseYear: 2019,
  },
  {
    title: "Breaking Bad",
    authorName: "Haisenberg",
    releaseYear: 1938,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  if (book1.releaseYear === book2.releaseYear) {
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);
