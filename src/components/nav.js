import React from 'react';
import { Router } from 'react-router-dom';
import MyComponent from './fet';

function Navbar() {
  return (
    <Router>
    <nav>
      <ul>
        <li><Router path='/fet'><MyComponent /></Router></li>
        <li><a href="https://www.google.com/">About</a></li>
        <li><a href="https://www.google.com/">Contact</a></li>
      </ul>
    </nav>
    </Router>
  );
}

export default Navbar;
