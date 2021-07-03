import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.props.addingNewBooks(books);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            title="Currently Reading"
            books={this.props.currentlyReading}
            onMove={this.props.onMove}
          />
          <BookShelf
            title="Want to Read"
            books={this.props.wantToRead}
            onMove={this.props.onMove}
          />
          <BookShelf
            title="Read"
            books={this.props.read}
            onMove={this.props.onMove}
          />
        </div>

        <div className="open-search">
          <Link to="/{SearchPage}">
            <button />
          </Link>
        </div>
      </div>
    );
  }
}
