import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AdminNavbar.css"; // Create this CSS file with the styles below

const AdminNavbar = ({ handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">LMS Portal - Admin</div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links">
            <Link to="/dashboard" className="nav-link">User Management</Link>
            <Link to="/dashboard/courses" className="nav-link">Course Management</Link>
            <Link to="/dashboard/analytics" className="nav-link">Analytics</Link>
           
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/dashboard" className="mobile-nav-link" onClick={toggleMenu}>User Management</Link>
          <Link to="/dashboard/courses" className="mobile-nav-link" onClick={toggleMenu}>Course Management</Link>
          <Link to="/dashboard/analytics" className="mobile-nav-link" onClick={toggleMenu}>Analytics</Link>
        
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="mobile-logout-button"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;