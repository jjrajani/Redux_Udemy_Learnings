/*
  - action creator returns and action.
  - an action is a function that runs though all
    of the state in our app.
*/

export function selectBook(book) {
  /*
    selectBook is an action creator and so must return an action,
    An object with a type property.
  */
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
