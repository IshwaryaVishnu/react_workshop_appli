import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Welcome from './Welcome';
import Person from './Person';
import About from './About';
import NotFound from './NotFound';
import CrudDemo from './CrudDemo';

function RouterDemo() {
  return (
    <Router>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/person">Person</Link>
        <Link to="/about">About</Link>
        <Link to="/crud">CRUD</Link>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/person" component={Person} />
        <Route path="/about" component={About} />
        <Route path="/crud" component={CrudDemo} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterDemo;
