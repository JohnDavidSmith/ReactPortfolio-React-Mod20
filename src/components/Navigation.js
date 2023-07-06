
import React, { useState } from 'react';

const Navigation = ({ handleNavigationClick }) => {
  const [activeItem, setActiveItem] = useState('about'); // State to track the active item

  const handleClick = (section) => {
    handleNavigationClick(section);
    setActiveItem(section);
  };

  return (
    <nav className="navigation">
    <ul className="navigation-list">
    <li
          onClick={() => handleClick('about')}
          className={activeItem === 'about' ? 'active' : ''}
        >
          About Me
        </li>
        <li
          onClick={() => handleClick('portfolio')}
          className={activeItem === 'portfolio' ? 'active' : ''}
        >
          Portfolio
        </li>
        <li
          onClick={() => handleClick('contact')}
          className={activeItem === 'contact' ? 'active' : ''}
        >
          Contact
        </li>
        <li
          onClick={() => handleClick('resume')}
          className={activeItem === 'resume' ? 'active' : ''}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
