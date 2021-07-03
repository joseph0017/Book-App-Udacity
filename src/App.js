import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Provider, { BookContext } from "./provider";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <BookContext.Consumer>
                  {(context) => <HomePage {...context} />}
                </BookContext.Consumer>
              )}
            />
            <Route
              path="/{SearchPage}"
              render={() => (
                <BookContext.Consumer>
                  {(context) => <SearchPage {...context} />}
                </BookContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
