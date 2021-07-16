import React, { Component } from "react";

export const BookContext = React.createContext();

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addingNewBooks: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        this.setState({ books, currentlyReading, wantToRead, read });
      },

      onMove: (book, newShelf, allShelfs) => {
        console.log(newShelf);
        const newBooks = this.state.books.map((allBooks) => {
          const foundBookID = allShelfs[newShelf].find(
            (bookID) => bookID === allBooks.id
          );
          if (foundBookID) {
            allBooks.shelf = newShelf;
          }
          return allBooks;
        });
        this.state.addingNewBooks(newBooks);
      },
    };
  }

  render() {
    return (
      <BookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}
