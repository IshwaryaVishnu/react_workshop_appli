import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/person">Person</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {props.children}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
