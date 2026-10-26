import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-eyebrow">
            ABOUT AEROSPACE INTERNATIONAL INCORPORATED
          </p>

          <h1>
            Built on technical understanding.
            <br />
            Trusted since 1989.
          </h1>

          <p className="about-hero-description">
            A specialized Indian partnership firm connecting advanced
            international technologies with critical industrial requirements.
          </p>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="about-introduction">
        <div className="about-intro-heading">
          <h2>
            Established in <span>1989</span>, Aerospace International
            Incorporated has spent decades building relationships where
            engineering capability meets market understanding.
          </h2>
        </div>

        <div className="about-intro-description">
          <p>
            We provide specialized solutions to India’s aerospace, defence,
            heavy engineering, space research, and energy sectors. We work with
            international manufacturers and facilitate the supply of advanced
            machinery, precision measuring instruments, specialized equipment,
            components, and spares.
          </p>

          <p>
            Our support extends across technical advisory, consulting,
            installation, commissioning, after-sales service, and market-entry
            guidance with a particular focus on Make in India requirements and
            localization strategies.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-grid">
          {/* Our Mission */}
          <div className="mission-card">
            <div className="mission-card-top">
              <p className="mission-label">OUR MISSION</p>
              <span className="mission-number">01</span>
            </div>

            <h2>
              Connect Indian
              <br />
              industries with
              <br />
              advanced global
              <br />
              technologies.
            </h2>

            <p className="mission-description">
              Helping international manufacturers navigate the Indian market
              through reliable representation, technical advisory, Make in India
              consulting, and equipment lifecycle support.
            </p>
          </div>

          {/* Our Vision */}
          <div className="vision-card">
            <div className="vision-card-top">
              <p className="vision-label">OUR VISION</p>
              <span className="vision-number">02</span>
            </div>

            <h2>
              Be the trusted partner
              <br />
              on both sides of every
              <br />
              technology
              <br />
              relationship.
            </h2>

            <p className="vision-description">
              Recognized for technical expertise, market knowledge, and the
              ability to facilitate successful partnerships across critical
              engineering sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="about-expertise">
        <div className="expertise-image-wrap">
          <img
            src="/images/About_images/what-we-deliver.jpg"
            alt="Industrial engineering equipment"
            className="expertise-image"
          />

          <div className="expertise-year">
            <strong>1989</strong>
            <span>ESTABLISHED IN INDIA</span>
          </div>
        </div>

        <div className="expertise-content">
          <p className="expertise-eyebrow">OUR EXPERTISE</p>

          <h2>
            International reach,
            <br />
            grounded in India.
          </h2>

          <p className="expertise-description">
            With decades of industry experience and established international
            relationships, we work closely with global manufacturers and Indian
            customers to identify suitable technologies and facilitate equipment
            supply and project execution.
          </p>

          <ul className="expertise-list">
            <li>Understanding India's industrial landscape</li>
            <li>Assessing applicable local-content requirements</li>
            <li>Exploring domestic manufacturing partnerships</li>
            <li>Supporting market establishment and growth</li>
          </ul>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="about-commitment">
        <div className="commitment-content">
          <p className="commitment-eyebrow">OUR COMMITMENT</p>

          <h2>
            Professional integrity. Technical
            <br />
            understanding. Dependable service.
          </h2>

          <p className="commitment-description">
            We are committed to building long-term partnerships that connect
            Indian customers with specialized international technologies while
            helping foreign manufacturers build a stronger presence in the
            Indian market.
          </p>

          <a href="/contact" className="commitment-button">
            <span>Contact Our Team</span>
            <span className="commitment-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
