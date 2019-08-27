import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Sidebar/> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
