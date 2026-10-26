import "../styles/Contact.css";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your enquiry form is ready to be connected to an email service.");
  }

  return (
    <main className="contact-page">
      {/* 1. Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-eyebrow">CONTACT US</p>

          <h1>
            Let’s discuss your engineering
            <br />
            requirement.
          </h1>

          <p className="contact-hero-description">
            Speak with our team about specialized equipment, technical advisory,
            Make in India consulting, or international manufacturer
            representation.
          </p>
        </div>
      </section>

      {/* 2. Enquiry Form and Office Details */}
      <section className="contact-main">
        <div className="contact-form-column">
          <p className="contact-section-eyebrow">SEND AN ENQUIRY</p>

          <h2>
            Tell us what you’re
            <br />
            working on.
          </h2>

          <p className="contact-intro">
            Share your requirement and our team will connect with you to
            understand the technical context.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your organization"
                  autoComplete="organization"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="interest">Area of Interest</label>
                <select id="interest" name="interest" defaultValue="" required>
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option>Technical Advisory & Consulting</option>
                  <option>Make in India Consulting & Compliance</option>
                  <option>International OEM Representation</option>
                  <option>Equipment Supply</option>
                  <option>Installation & Commissioning</option>
                  <option>After-Sales Service</option>
                  <option>Other Engineering Requirements</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your technical requirement"
                  rows="5"
                  required
                />
              </div>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry <span>→</span>
            </button>
          </form>
        </div>

        {/* Office information */}
        <aside className="contact-office-card">
          <p className="office-eyebrow">BANGALORE HEAD OFFICE</p>

          <h2>
            Aerospace
            <br />
            International
            <br />
            Incorporated
          </h2>

          <div className="office-detail">
            <span className="office-icon" aria-hidden="true">
              ⌖
            </span>
            <div>
              <h3>ADDRESS</h3>
              <p>
                220, 5th Main, 10th Cross,
                <br />
                N.G.E.F. Layout,
                <br />
                Nagarbhavi,
                <br />
                Bangalore – 560 072, India.
              </p>
            </div>
          </div>

          <div className="office-detail">
            <span className="office-icon" aria-hidden="true">
              ♧
            </span>
            <div>
              <h3>PHONE</h3>
              <a href="tel:+918023186616">+91 80 23186616</a>
              <a href="tel:+918023186579">+91 80 23186579</a>
            </div>
          </div>

          <div className="office-detail">
            <span className="office-icon" aria-hidden="true">
              ♙
            </span>
            <div>
              <h3>CONTACT PERSON</h3>
              <p>Souvir Rakshit</p>
              <a href="tel:+917829958298">Mobile: +91 7829598298</a>
            </div>
          </div>

          <div className="office-note">
            For equipment, consulting, representation, installation, and
            after-sales enquiries.
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Contact;
