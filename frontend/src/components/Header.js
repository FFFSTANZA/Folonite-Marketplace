import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Folonite.js Marketplace</h1>
      <nav>
        <ul className="inline-flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/components" className="text-white">Components</Link></li>
          <li><Link to="/templates" className="text-white">Templates</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

