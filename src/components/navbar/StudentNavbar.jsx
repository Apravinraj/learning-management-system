import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./StudentNavbar.css";

const StudentNavbar = ({ handleLogout }) => {
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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">LMS Portal - Student</div>

        {/* Desktop Navigation - visible on larger screens */}
        <div className="desktop-nav">
          <div className="nav-links">
            <Link to="/dashboard" className="nav-link">Home</Link>
            <Link to="/dashboard/progress" className="nav-link">Progress</Link>
            <Link to="/dashboard/overview" className="nav-link">Overview</Link>
            <Link to="/dashboard/deadlines" className="nav-link">Deadlines</Link>
            <Link to="/dashboard/quizzes" className="nav-link">Quiz History</Link>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle - visible on small screens */}
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

      {/* Mobile Menu - appears below navbar on small screens */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/dashboard" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/dashboard/progress" className="mobile-nav-link" onClick={toggleMenu}>Progress</Link>
          <Link to="/dashboard/overview" className="mobile-nav-link" onClick={toggleMenu}>Overview</Link>
          <Link to="/dashboard/deadlines" className="mobile-nav-link" onClick={toggleMenu}>Deadlines</Link>
          <Link to="/dashboard/quizzes" className="mobile-nav-link" onClick={toggleMenu}>Quiz History</Link>
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

export default StudentNavbar;