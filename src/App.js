import React, { useState, useEffect } from 'react';
import './App.css';
import { FaBars, FaTimes, FaHome, FaUserAlt, FaAngleDown } from 'react-icons/fa';


//Main function of the app
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => setSidebar(!sidebar);
  const toggleDropdown = () => setDropdown(!dropdown);

  // Function to handle scroll and hide/show hamburger menu based on scroll direction
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // User is scrolling down
      setShowHamburger(false);
    } else {
      // User is scrolling up
      setShowHamburger(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <header className="navbar">
        {showHamburger && (
          <div className="hamburger-menu" onClick={toggleSidebar}>
            {sidebar ? <FaTimes /> : <FaBars />}
          </div>
        )}
        <h1>Responsive Sidebar</h1>
      </header>
      <aside className={`sidebar ${sidebar ? 'active' : ''}`}>
        <ul>
          <li>
            <FaHome /> <a href="#">Home</a>
          </li>
          <li onClick={toggleDropdown}>
            <FaUserAlt /> <a href="#">Profile</a> <FaAngleDown />
            {dropdown && (
              <ul className="dropdown">
                <li><a href="#">View Profile</a></li>
                <li><a href="#">Edit Profile</a></li>
              </ul>
            )}
          </li>
          <li>
            <FaUserAlt /> <a href="#">About</a>
          </li>
        </ul>
      </aside>
      <main>
        <h2>Welcome to the TutorialsPoint Responsive Sidebar Example!</h2>
        <p>
          Resize the window or click the hamburger menu to see the sidebar in action.
          Scroll the page up and down to see the hamburger auto-hide.
        </p>
        <p>
          This is the TutorialsPoint responsive sidebar practice project.         </p>
        {/* Additional content to make the page scroll */}
        <div style={{ height: '150vh' }}></div>
      </main>
    </div>
  );
}

export default App;
