import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loading from "./components/Loading/Loading.jsx";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}
