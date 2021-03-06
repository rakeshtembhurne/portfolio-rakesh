import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="columns is-mobile is-centered has-text-centered is-multiline">
        <h1 className="column is-full title is-hidden-desktop is-hidden-tablet">Rakesh Tembhurne</h1>
        <p className="column is-full is-hidden-desktop is-hidden-tablet is-128x128">
          <img className="is-rounded animated bounce" src="https://avatars2.githubusercontent.com/u/1090611?s=100" alt="Rakesh Tembhurne" />
        </p>
        <p className="column is-half-mobile">
        <Link to="/about" className="link button is-outlined is-link animated slideInRight delay-2s">About</Link>
        </p>
        <p className="column is-half-mobile">
          <a href="https://rakesh.tembhurne.com" target="_blank" rel="noopener noreferrer" className="link button is-outlined is-link animated slideInRight delay-1s">Blog</a>
        </p>
        <p className="column is-hidden-mobile">
          <Link to="/">
            <img className="is-rounded" src="https://avatars2.githubusercontent.com/u/1090611?s=100" alt="Rakesh Tembhurne" />
          </Link>
        </p>
        <p className="column is-half-mobile">
          <a href="https://leanpub.com/u/tembhurne" target="_blank" rel="noopener noreferrer" className="link button is-outlined is-link animated slideInLeft delay-1s">Books</a>
        </p>
        <p className="column is-half-mobile">
          <Link to="/contact" className="link button is-outlined is-link animated slideInLeft delay-2s">Contact</Link>
        </p>
      </nav>
  );
}

export default Navbar;