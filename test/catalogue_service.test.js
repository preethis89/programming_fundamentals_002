const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });

    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });
});
describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });

  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});
describe("catalogueService.countBooksByKeyword", () => {
  test("returns 2 if no of books has the given word", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });
  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
  });
  test("returns 0 if ter is not book which starts with a number", () => {
    expect(catalogueService.countBooksByFirstLetter(2666)).toBe(0);
  });
  test("returns 0 books begin with arg true", () => {
    expect(catalogueService.countBooksByFirstLetter(true)).toBe(0);
  });
  test("returns 0 when array is passed as arg", () => {
    expect(catalogueService.countBooksByFirstLetter([1, 2, 3])).toBe(0);
  });
});
describe("catalogueService.getBooksByAuthor", () => {
  test("returns the list of books with the author Charles Dickens", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });
});

