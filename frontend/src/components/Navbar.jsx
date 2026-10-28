import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  function goToSection(id) {
    closeMenu();
    navigate(`/products-services#${id}`);

    // Scroll after the destination page has rendered.
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  }

  const services = [
    {
      label: "Engineering Advisory & Consulting",
      id: "engineering-advisory",
    },
    {
      label: "Make in India Consulting & Compliance Support",
      id: "make-in-india",
    },
    {
      label: "International OEM Representation",
      id: "oem-representation",
    },
    {
      label: "Equipment Supply",
      id: "equipment-supply",
    },
    {
      label: "Installation & Commissioning",
      id: "installation-commissioning",
    },
    {
      label: "After-Sales Service",
      id: "after-sales-service",
    },
  ];

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
          onClick={() => setMenuOpen((open) => !open)}
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

          <div
            className={`nav-dropdown ${dropdownOpen ? "dropdown-open" : ""}`}
            onMouseEnter={() => {
              if (window.matchMedia("(min-width: 901px)").matches) {
                setDropdownOpen(true);
              }
            }}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="nav-dropdown-top">
              <NavLink
                to="/products-services"
                className="nav-link nav-dropdown-page-link"
                onClick={closeMenu}
              >
                Products &amp; Services
              </NavLink>

              <button
                type="button"
                className="nav-dropdown-arrow"
                aria-label="Toggle Products and Services dropdown"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <ChevronDown
                  size={16}
                  className={
                    dropdownOpen
                      ? "dropdown-chevron rotated"
                      : "dropdown-chevron"
                  }
                />
              </button>
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <button
                    type="button"
                    className="dropdown-heading"
                    onClick={() => goToSection("products")}
                  >
                    Products
                    <ChevronRight size={18} />
                  </button>

                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => goToSection("products")}
                  >
                    Machinery &amp; Equipment
                  </button>

                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => goToSection("products")}
                  >
                    Precision Instruments
                  </button>

                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => goToSection("products")}
                  >
                    Components &amp; Spares
                  </button>
                </div>

                <div className="dropdown-column">
                  <button
                    type="button"
                    className="dropdown-heading"
                    onClick={() => goToSection("services")}
                  >
                    Services
                    <ChevronRight size={18} />
                  </button>

                  <div className="dropdown-services">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        className="dropdown-item"
                        onClick={() => goToSection(service.id)}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

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
