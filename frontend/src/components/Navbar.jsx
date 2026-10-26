import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink
          to="/"
          className="brand"
          aria-label="Aerospace International Home"
          onClick={closeMenu}
        >
          <img
            src="/images/company-logo.png"
            alt="Aerospace International Incorporated"
            className="brand-logo"
          />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink
            to="/products-services"
            className="nav-link"
            onClick={closeMenu}
          >
            Products &amp; Services
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="nav-contact" onClick={closeMenu}>
          Contact us <span>→</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
