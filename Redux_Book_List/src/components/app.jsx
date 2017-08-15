import React, { Component } from 'react';

/* Containers */
import {
  BookList,
  BookDetail
} from '../containers';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
