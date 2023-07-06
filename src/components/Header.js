
import React from 'react';
import Navigation from './Navigation';

const Header = ({ handleNavigationClick }) => {
  return (
    <header className="header">
      <div className="header-content">
      <h1>John David Smith</h1>
      <Navigation handleNavigationClick={handleNavigationClick} />
      </div>
    </header>
  );
};

export default Header;
