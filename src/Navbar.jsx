
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Login information
  const authUser = JSON.parse(
    localStorage.getItem("authUser") || "null"
  );

  function handleLogout() {
    localStorage.removeItem("authUser");
    setMenuOpen(false);
    navigate("/home");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="main-navbar">

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <Link to="/home" className="navbar-logo">
          Rehan Shamsher
        </Link>

        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/usestate">UseState</Link>
          <Link to="/todo">Todo List</Link>
        </div>

      </nav>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Left Sidebar */}
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>

        <div className="side-menu-header">
          <h2>My Account</h2>

          <button onClick={closeMenu}>×</button>
        </div>

        {authUser ? (
          <>
            <div className="account-info">
              <div className="account-avatar">
                {authUser.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <h3>{authUser.name}</h3>
              <p>{authUser.role === "admin" ? "Administrator" : "Student"}</p>
            </div>

            {authUser.role === "admin" ? (
              <Link to="/admin" onClick={closeMenu}>
                Admin Dashboard
              </Link>
            ) : (
              <Link to="/user" onClick={closeMenu}>
                User Dashboard
              </Link>
            )}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link to="/register" onClick={closeMenu}>
              Register
            </Link>
          </>
        )}

      </aside>
    </>
  );
}

export default Navbar;
