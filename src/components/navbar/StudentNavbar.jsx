import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./StudentNavbar.css";

const StudentNavbar = ({ handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/dashboard" end className="brand-link">
            LMS Portal - Student
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard/progress"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Progress
            </NavLink>
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Overview
            </NavLink>
            <NavLink
              to="/dashboard/deadlines"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Deadlines
            </NavLink>
            <NavLink
              to="/dashboard/quizzes"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Quiz History
            </NavLink>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Progress
        </NavLink>
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Overview
        </NavLink>
        <NavLink
          to="/dashboard/deadlines"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Deadlines
        </NavLink>
        <NavLink
          to="/dashboard/quizzes"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Quiz History
        </NavLink>
        <button
          onClick={() => {
            handleLogout();
            closeMenu();
          }}
          className="mobile-logout-button"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default StudentNavbar;
