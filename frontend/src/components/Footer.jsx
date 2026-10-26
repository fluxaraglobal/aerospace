import "../styles/Footer.css";

function Footer() {
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
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products-services">Products &amp; Services</a>
          <a href="/contact">Contact Us</a>

          <div className="footer-contact">
            <h3>CONTACT</h3>
            <a href="tel:+918023186616">+91 80 23186616</a>
            <a href="tel:+918023186579">+91 80 23186579</a>
          </div>
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
        <p>© 2026 Aerospace International Incorporated.</p>
        <p>Established 1989 · Bangalore, India</p>
      </div>
    </footer>
  );
}

export default Footer;
