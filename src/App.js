//App.js


import React, { useState } from 'react';
import './Sidebar.css'; // Custom styles for the sidebar


// Create a Sidebar component with a open and close toggle state
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


// Render the Sidebar with a clickable hamburger icon 
  return (
    <div className="sidebar-container">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>


      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#dashboard"> TutorialsPoint Dashboard</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;
