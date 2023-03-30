import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CrudDemo from './CrudDemo';

const Welcome = () => {
  return <h2>Welcome!</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Home = () => {
  return <h2>Home</h2>;
};

const Person = () => {
  return <h2>Person</h2>;
};

const NotFound = () => {
  return <h2>404 - Not Found</h2>;
};

const RouterDemo = () => {
	return (
	  <Router>
		<div>
		  <Header />
		  <Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/home" component={Home} />
			<Route path="/person" component={Person} />
			<Route path="/about" component={About} />
			<Route path="/crud" component={CrudDemo} />
			<Route component={NotFound} />
		  </Switch>
		</div>
	  </Router>
	);
  };
  
  const Header = () => {
	return (
	  <nav>
		<ul>
		  <li>
			<Link to="/">Welcome</Link>
		  </li>
		  <li>
			<Link to="/home">Home</Link>
		  </li>
		  <li>
			<Link to="/person">Person</Link>
		  </li>
		  <li>
			<Link to="/about">About</Link>
		  </li>
		  <li>
			<Link to="/crud">Crud</Link>
		  </li>
		</ul>
	  </nav>
	);
  };
export default RouterDemo;
