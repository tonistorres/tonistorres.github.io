import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loading from "./components/Loading/Loading.jsx";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Loading} />
      </Switch>
    );
  }
}
