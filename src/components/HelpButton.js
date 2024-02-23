import React, { useState } from 'react';
import './HelpButton.css'; 

const Help = () => {
  // State to manage whether the menu is active
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    // still to fix icons
    <div>            
      <div id="circularMenu" className={`circular-menu circular-menu-left ${isActive ? 'active' : ''}`}>
        <a className="floating-btn" onClick={toggleMenu}>
          <i className="fa fa-bars">?</i>
        </a>
        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-home">faq</a>
          <a href="#" className="menu-item fa fa-user">github</a>
          <a href="#" className="menu-item fa fa-pie-chart">email</a>
          <a href="#" className="menu-item fa fa-cog">settings</a>          
        </menu>
      </div>
    </div>
  );
};

export default Help;
