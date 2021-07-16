import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as BooksAPI from "../BooksAPI";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      books: [],
    };
  }

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.props.addingNewBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = async (e) => {
    try {
      const query = e.target.value;
      this.setState({ query });

      if (query.trim()) {
        const results = await BooksAPI.search(query);
        if (results.err) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: results });
        }
      } else {
        this.setState({ books: [] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length > 0 &&
              this.state.books.map((book) => {
                const foundBookShelf = this.props.books.find(
                  (searchBook) => searchBook.id === book.id
                );
                if (foundBookShelf) {
                  book.shelf = foundBookShelf.shelf;
                } else {
                  book.shelf = "none";
                }

                return (
                  <Book key={book.id} {...book} onMove={this.props.onMove} />
                );
              })}
            {this.state.books.length === 0 && (
              <h1 style={{ textAlign: "center" }}> No Results Found </h1>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
