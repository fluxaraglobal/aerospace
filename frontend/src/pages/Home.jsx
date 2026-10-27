import "../styles/Home.css";

const clientLogos = Array.from({ length: 17 }, (_, index) => ({
  name: `Company ${index + 1}`,
  image: `/images/Home_images/companies_worked/company${index + 1}.png`,
}));

const highlights = [
  "International manufacturer Collaboration",
  "Specialized equipment and precision systems",
  "India market and localization support",
  "Equipment lifecycle coordination",
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-background" />

        <div className="hero-content">
          <p className="hero-eyebrow">ESTABLISHED 1989 · BANGALORE, INDIA</p>

          <h1>
            Connecting Global Engineering
            <br />
            Expertise with <span>Indian Industry</span>
          </h1>

          <p className="hero-description">
            We connect international manufacturers with India’s aerospace,
            defence, heavy engineering, space research, and energy sectors
            through specialized equipment, technical consulting, and engineering
            solutions.
          </p>

          <div className="hero-actions">
            <a href="#capabilities" className="hero-button primary">
              Explore Our Services <span>→</span>
            </a>

            <a href="/contact" className="hero-button secondary">
              Contact Our Team <span>→</span>
            </a>
          </div>

          <div className="hero-experience">
            <strong>35+</strong>
            <span>
              YEARS CONNECTING
              <br />
              TECHNOLOGY AND INDUSTRY
            </span>
          </div>
        </div>

        <div className="hero-highlights">
          {highlights.map((item, index) => (
            <div className="hero-highlight" key={item}>
              <span className="highlight-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="deliver-section" id="about">
        <div className="deliver-container">
          <div className="deliver-visual">
            <img
              src="/images/Home_images/what-we-deliver.jpg"
              alt="Precision industrial engineering equipment"
              className="deliver-image"
            />

            <div className="deliver-role-card">
              <span>OUR ROLE</span>
              <p>Global capability. Local understanding.</p>
            </div>
          </div>

          <div className="deliver-content">
            <p className="section-eyebrow">WHAT WE DELIVER</p>

            <h2>
              Engineering
              <br />
              connections that move
              <br />
              industry forward.
            </h2>

            <p>
              We provide technical advisory and consulting alongside the
              representation, marketing, and supply of specialized industrial
              machinery, precision equipment, measuring instruments, and
              engineering components.
            </p>

            <p>
              Our work also supports international manufacturers with Make in
              India compliance, localization strategies, installation,
              commissioning, and after-sales service.
            </p>

            <a href="/about" className="deliver-link">
              Discover our company <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="capabilities-section" id="capabilities">
        <div className="capabilities-container">
          <div className="capabilities-heading">
            <p className="section-eyebrow">CORE CAPABILITIES</p>

            <h2>Comprehensive engineering support</h2>

            <p className="capabilities-intro">
              A connected set of services built around technical fit, market
              knowledge, and dependable execution.
            </p>
          </div>

          <div className="capabilities-grid">
            <article className="capability-card">
              <div className="capability-image-wrap">
                <img
                  src="/images/Home_images/technical-advisory.jpg"
                  alt="Industrial equipment for technical advisory and consulting"
                  className="capability-image"
                />
                <span className="capability-icon" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="capability-content">
                <h3>Technical Advisory &amp; Consulting</h3>
                <p>
                  Technical specification assessment, technology evaluation,
                  equipment selection, and application-specific engineering
                  solutions.
                </p>
                <a href="/products-services" className="capability-link">
                  Explore service <span>→</span>
                </a>
              </div>
            </article>

            <article className="capability-card">
              <div className="capability-image-wrap">
                <img
                  src="/images/Home_images/make_in_india.jpg"
                  alt="Engineering workshop for Make in India consulting"
                  className="capability-image"
                />
                <span className="capability-icon" aria-hidden="true">
                  ▤
                </span>
              </div>

              <div className="capability-content">
                <h3>Make in India Consulting &amp; Compliance Support</h3>
                <p>
                  Guidance on applicable Make in India requirements,
                  localization options, local-content requirements, and
                  potential Indian manufacturing partnerships.
                </p>
                <a href="/products-services" className="capability-link">
                  Explore service <span>→</span>
                </a>
              </div>
            </article>

            <article className="capability-card">
              <div className="capability-image-wrap">
                <img
                  src="/images/Home_images/oem-representation.jpg"
                  alt="Aircraft engine in an aerospace engineering facility"
                  className="capability-image"
                />
                <span className="capability-icon" aria-hidden="true">
                  ⊕
                </span>
              </div>

              <div className="capability-content">
                <h3>International OEM Representation</h3>
                <p>
                  Connecting global manufacturers with Indian industrial
                  customers, research institutions, and technical organizations
                  while supporting business development.
                </p>
                <a href="/products-services" className="capability-link">
                  Explore service <span>→</span>
                </a>
              </div>
            </article>
          </div>

          <div className="capabilities-action">
            <a href="/products-services" className="capabilities-button">
              View All Products &amp; Services <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-section" id="industries">
        <div className="industries-container">
          <div className="industries-heading">
            <p className="section-eyebrow">INDUSTRIES WE SERVE</p>
            <h2>Supporting India’s critical sectors</h2>
            <p>
              Specialized technical solutions for environments where precision,
              reliability, and engineering understanding matter.
            </p>
          </div>

          <div className="industries-grid">
            <article className="industry-card industry-aerospace">
              <img
                src="/images/Home_images/aerospace.jpg"
                alt="Aircraft in an aerospace hangar"
              />
              <div className="industry-overlay">
                <span className="industry-number">01</span>
                <h3>Aerospace</h3>
                <p>
                  Specialized equipment and precision technologies for demanding
                  aerospace applications.
                </p>
              </div>
            </article>

            <article className="industry-card">
              <img
                src="/images/Home_images/defence.jpg"
                alt="Aircraft inside a defence hangar"
              />
              <div className="industry-overlay">
                <span className="industry-number">02</span>
                <h3>Defence</h3>
                <p>
                  Technology connections and equipment support for critical
                  defence requirements.
                </p>
              </div>
            </article>

            <article className="industry-card">
              <img
                src="/images/Home_images/heavy-engineering.jpg"
                alt="Heavy engineering industrial equipment"
              />
              <div className="industry-overlay">
                <span className="industry-number">03</span>
                <h3>Heavy Engineering</h3>
                <p>
                  Advanced machinery for complex, high-performance industrial
                  operations.
                </p>
              </div>
            </article>

            <article className="industry-card">
              <img
                src="/images/Home_images/space-research.jpg"
                alt="Space shuttle launching into the sky"
              />
              <div className="industry-overlay">
                <span className="industry-number">04</span>
                <h3>Space Research</h3>
                <p>
                  Precision systems for research institutions and space-focused
                  applications.
                </p>
              </div>
            </article>

            <article className="industry-card">
              <img
                src="/images/Home_images/energy.jpg"
                alt="Energy generation facility"
              />
              <div className="industry-overlay">
                <span className="industry-number">05</span>
                <h3>Energy</h3>
                <p>
                  Engineering equipment and technical solutions for the energy
                  sector.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="clients-section" id="clients">
        <div className="clients-heading">
          <div>
            <p className="section-eyebrow">OUR CLIENTS</p>
            <h2>
              Companies we have
              <br />
              worked with
            </h2>
          </div>

          <p className="clients-description">
            International manufacturer Collaboration developed through decades
            of technically focused market engagement.
          </p>
        </div>

        <div className="clients-marquee">
          <div className="clients-track">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div className="client-logo-card" key={`${client.name}-${index}`}>
                <img src={client.image} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Conversation CTA */}
      <section className="conversation-cta">
        <div className="conversation-content">
          <p className="section-eyebrow">START A CONVERSATION</p>

          <h2>
            Looking for the Right Engineering
            <br />
            Solution?
          </h2>

          <p className="conversation-description">
            Connect with our team to discuss your technical requirements and
            explore suitable engineering solutions.
          </p>
        </div>

        <a href="/contact" className="conversation-button">
          <span>Discuss Your Requirements</span>
          <span className="conversation-arrow">→</span>
        </a>
      </section>
    </main>
  );
}

export default Home;
