// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  // Your code here
  return catalogue.length;
}

function checkBook(book) {
  // Your code here
  for(i=0;i<catalogue.length;i++){
    if(catalogue[i]=== book)
    return true;
   
    
  }
  return false;
}

function countBooksByFirstLetter(letter) {
  // Your code here
  var results = 0;
  for(i=0;i<catalogue.length;i++){
    if(catalogue[i][0]===letter)
    results++;
  }
  return results;
}

function countBooksByKeyword(keyword) {
  // Your code here
  var count=0;
  for(i=0;i<catalogue.length;i++){
    let kword = catalogue[i];
    if(kword.toLowerCase().includes(keyword.toLowerCase()))
    count++;
  }
  return count;
}

function getBooksByAuthor(author) {
  // Your code here
   let books = [];
  for(i=0;i<catalogue.length;i++){
    let xauthor = catalogue[i];
    if(xauthor.toLowerCase().includes(author.toLowerCase()))
    books.push(catalogue[i]);
  }
  return books;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
