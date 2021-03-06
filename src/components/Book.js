import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

export default class Book extends Component {
  handlechange = async (e) => {
    try {
      const shelf = e.target.value;
      const book = this.props;
      const result = await BooksAPI.update(book, shelf);
      this.props.onMove(book, shelf, result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    this.props.imageLinks ? this.props.imageLinks.thumbnail : ""
                  })`,
                }}
              />
              <div className="book-shelf-changer">
                <select onChange={this.handlechange} value={this.props.shelf}>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">
              {this.props.authors ? this.props.authors : "No Author Found"}
            </div>
          </div>
        </li>
        ;
      </>
    );
  }
}
