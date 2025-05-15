import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Import the new CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    department: false,
    academics: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdowns({ about: false, department: false, academics: false });
  };

  const handleMouseEnter = (name) => {
    setDropdowns({ ...dropdowns, [name]: true });
  };

  const handleMouseLeave = (name) => {
    setDropdowns({ ...dropdowns, [name]: false });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="mobile-icon">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-menu">
            <Link to="/" className="nav-link">Home</Link>

            {/* About */}
            <div
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={() => handleMouseLeave('about')}
            >
              <button className="nav-link">About ▾</button>
              {dropdowns.about && (
                <div className="dropdown-menu">
                  <Link to="/about/acnys" className="dropdown-item">About ACNYS</Link>
                  <Link to="/about/messages" className="dropdown-item">Messages</Link>
                  <Link to="/about/vision-mission" className="dropdown-item">Vision & Mission</Link>
                </div>
              )}
            </div>

            {/* Department */}
            <div
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('department')}
              onMouseLeave={() => handleMouseLeave('department')}
            >
              <button className="nav-link">Department ▾</button>
              {dropdowns.department && (
                <div className="dropdown-menu">
                  <Link to="/department/ug" className="dropdown-item">UG</Link>
                  <Link to="/department/pg" className="dropdown-item">PG</Link>
                </div>
              )}
            </div>

            {/* Academics */}
            <div
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('academics')}
              onMouseLeave={() => handleMouseLeave('academics')}
            >
              <button className="nav-link">Academics ▾</button>
              {dropdowns.academics && (
                <div className="dropdown-menu">
                  <Link to="/academics/activities" className="dropdown-item">Activities</Link>
                  <Link to="/academics/achieve" className="dropdown-item">Placement</Link>
                  <Link to="/academics/placement" className="dropdown-item">Achievement</Link>
                </div>
              )}
            </div>

            <Link to="/anandamaya" className="nav-link">Anandamaya</Link>
            <Link to="/acnys" className="nav-link">Life@ACNYS</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-container">
              {/* Home */}
              <Link
                to="/"
                onClick={toggleMenu}
                className="mobile-menu-item"
              >
                Home
              </Link>

              {/* About */}
              <div className="mobile-menu-section">
                <p className="mobile-menu-title">About</p>
                <div className="mobile-submenu">
                  <Link to="/about/acnys" onClick={toggleMenu} className="mobile-submenu-item">About ACNYS</Link>
                  <Link to="/about/messages" onClick={toggleMenu} className="mobile-submenu-item">Messages</Link>
                  <Link to="/about/vision-mission" onClick={toggleMenu} className="mobile-submenu-item">Vision & Mission</Link>
                </div>
              </div>

              {/* Department */}
              <div className="mobile-menu-section">
                <p className="mobile-menu-title">Department</p>
                <div className="mobile-submenu">
                  <Link to="/department/ug" onClick={toggleMenu} className="mobile-submenu-item">UG</Link>
                  <Link to="/department/pg" onClick={toggleMenu} className="mobile-submenu-item">PG</Link>
                </div>
              </div>

              {/* Academics */}
              <div className="mobile-menu-section">
                <p className="mobile-menu-title">Academics</p>
                <div className="mobile-submenu">
                  <Link to="/academics/activities" onClick={toggleMenu} className="mobile-submenu-item">Activities</Link>
                  <Link to="/academics/achieve" onClick={toggleMenu} className="mobile-submenu-item">Placement</Link>
                  <Link to="/academics/publications" onClick={toggleMenu} className="mobile-submenu-item">Achievements</Link>
                </div>
              </div>

              {/* Other Links */}
              <Link to="/anandamaya" onClick={toggleMenu} className="mobile-menu-item">Anandamaya</Link>
              <Link to="/acnys" onClick={toggleMenu} className="mobile-menu-item">Life@ACNYS</Link>
              <Link to="/contact" onClick={toggleMenu} className="mobile-menu-item">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
