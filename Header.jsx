import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>Travl.</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="header__actions">
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
