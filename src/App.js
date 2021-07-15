import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Provider, { MyContext } from "./provider";

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
                <MyContext.Consumer>
                  {(context) => <HomePage {...context} />}
                </MyContext.Consumer>
              )}
            />
            <Route
              path="/{SearchPage}"
              render={() => (
                <MyContext.Consumer>
                  {(context) => <SearchPage {...context} />}
                </MyContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
