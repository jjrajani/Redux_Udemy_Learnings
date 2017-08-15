import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map((book, i) => (
      <li
        key={i}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item"
      >
        {book.title}
      </li>
    ));
  }
}

/*
  whatever gets returned from mapStateToProps will
  show up as props inside of BookList.
*/
function mapStateToProps(state) {
  return {
    books: state.books,
  }
}

/*
  Anything returned from mapDispatchToProps, will end up
  as props on the BookList container
*/
function mapDispatchToProps(dispatch) {
  /*
    Whenever selectBook is called, the result should be passed
    to all of our reducers.
    bindActionCreators takes care of this.
  */
  return bindActionCreators({ selectBook }, dispatch);
}

/*
  Promote BookList from component to a container.
  It needs to know about this new dispatch method, selectBook.
  Make it available as a prop
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
