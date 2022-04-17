import React, { Component } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import About from "./pages/About/About";
import Skill from "./pages/Skills/Skills";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}
