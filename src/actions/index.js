export function selectBook(book) {
  // console.log('this is the book ' + book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
