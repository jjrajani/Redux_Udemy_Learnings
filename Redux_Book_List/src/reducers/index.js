/*
A reducer is a function that returns
a piece of the application state.
*/

/*
Many pieces of application state,
so many reduces.
*/

/*
For this example we will have a reducer
for returning a list of users as well as
a reducer for returning a currently selected user
*/

/* Reducers */
import Books from './reducer_books';
import ActiveBook from './reducer_active_book';
/* -------- */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: Books,
  activeBook: ActiveBook,
});

export default rootReducer;
