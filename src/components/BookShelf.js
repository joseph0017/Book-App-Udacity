import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
  render() {
    return (
      <>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books &&
                this.props.books.map((book) => (
                  <Book key={book.id} {...book} onMove={this.props.onMove} />
                ))}
            </ol>
          </div>
        </div>
      </>
    );
  }
}
