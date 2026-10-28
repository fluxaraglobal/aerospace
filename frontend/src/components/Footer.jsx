import "../styles/Footer.css";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function goToPage(path) {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Company information */}
        <div className="footer-company">
          <a href="/" className="footer-logo">
            <img
              src="/images/company-logo.png"
              alt="Aerospace International Incorporated"
            />
          </a>

          <p>
            Connecting international manufacturers with Indian industry through
            specialized equipment, technical consulting, and dependable
            engineering support since 1989.
          </p>
        </div>

        {/* Navigation links */}
        <div className="footer-navigation">
          <h3>NAVIGATION</h3>

          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              goToPage("/");
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={(e) => {
              e.preventDefault();
              goToPage("/about");
            }}
          >
            About Us
          </Link>

          <Link
            to="/products-services"
            onClick={(e) => {
              e.preventDefault();
              goToPage("/products-services");
            }}
          >
            Products &amp; Services
          </Link>

          <Link
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              goToPage("/contact");
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Head office address */}
        <div className="footer-office">
          <h3>HEAD OFFICE</h3>
          <p>
            220, 5th Main, 10th Cross,
            <br />
            N.G.E.F. Layout, Nagarbhavi,
            <br />
            Bangalore – 560 072, India.
          </p>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="footer-bottom">
        <p>
          COPYRIGHT © 2026 AEROSPACE INTERNATIONAL. ALL RIGHTS RESERVED.
          Designed by{" "}
          <a
            href="https://codentixtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="copyright-link"
          >
            Codentix Tech LLP
          </a>
        </p>
        <p>Established 1989 · Bangalore, India</p>
      </div>
    </footer>
  );

  <div className="copyright-bar">
    <p>
      COPYRIGHT © 2026 AEROSPACE INTERNATIONAL. ALL RIGHTS RESERVED. Designed
      and Developed by <strong>Codentix Tech LLP</strong>
    </p>
  </div>;
}

export default Footer;
