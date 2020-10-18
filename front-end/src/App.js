import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sample from "./component/sample";
import Home from "./component/home";
import Predict from './component/prediction';
import Model from "./component/model";
import Header from "./component/header";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/model" component={Model} />
        <Route path="/sample" component={Sample} />
        <Route path="/prediction" component={Predict} />
      </Switch>
    </Router >

  );
}

export default App;
