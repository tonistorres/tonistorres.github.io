import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loading from './components/Loading/Loading';
import About from './pages/About/About';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}
