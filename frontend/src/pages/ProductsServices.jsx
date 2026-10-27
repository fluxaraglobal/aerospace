import "../styles/ProductsServices.css";

const expertiseCards = [
  {
    number: "01",
    title: "Engineering Advisory & Consulting",
    description:
      "Technical guidance to identify suitable technologies, evaluate requirements, and support engineering decisions.",
    image: "/images/Home_images/technical-advisory.jpg",
  },
  {
    number: "02",
    title: "Make in India Consulting & Compliance Support",
    description:
      "Support for localization strategies, applicable local-content requirements, and domestic manufacturing opportunities.",
    image: "/images/products_images/make-in-india.jpg",
  },
  {
    number: "03",
    title: "International OEM Representation",
    description:
      "Connecting global original equipment manufacturers with Indian customers and industry partners.",
    image: "/images/Home_images/oem-representation.jpg",
  },
];

const serviceItems = [
  {
    number: "01",
    title: "Engineering Advisory & Consulting",
    description:
      "Understanding technical requirements and identifying suitable engineering technologies for industrial applications.",
    image: "/images/Home_images/technical-advisory.jpg",
    reverse: false,
  },
  {
    number: "02",
    title: "Make in India Consulting & Compliance Support",
    description:
      "Helping international manufacturers understand localization opportunities and applicable Indian requirements.",
    image: "/images/products_images/make-in-india.jpg",
    reverse: true,
  },
  {
    number: "03",
    title: "International OEM Representation",
    description:
      "Building relationships between international manufacturers and Indian aerospace, defence, and engineering customers.",
    image: "/images/Home_images/oem-representation.jpg",
    reverse: false,
  },
  {
    number: "04",
    title: "Equipment Supply",
    description:
      "Coordinating the supply of specialized machinery, precision instruments, engineering equipment, and components.",
    image: "/images/Home_images/equipment-supply.jpg",
    reverse: true,
  },
  {
    number: "05",
    title: "Installation & Commissioning",
    description:
      "Supporting equipment implementation, installation coordination, commissioning, and operational readiness.",
    image: "/images/Home_images/installation.jpg",
    reverse: false,
  },
  {
    number: "06",
    title: "After-Sales Service",
    description:
      "Providing ongoing coordination and equipment lifecycle support to help customers maintain reliable operations.",
    image: "/images/Home_images/after-sales.jpg",
    reverse: true,
  },
];

const sectors = [
  {
    title: "Aerospace",
    image: "/images/Home_images/aerospace.jpg",
  },
  {
    title: "Defence",
    image: "/images/Home_images/defence.jpg",
  },
  {
    title: "Space Research",
    image: "/images/Home_images/space-research.jpg",
  },
  {
    title: "Energy",
    image: "/images/Home_images/energy.jpg",
  },
];

const machinery = [
  {
    title: "Precision Measuring Instruments",
    description:
      "Measurement and inspection solutions for demanding engineering applications.",
    image: "/images/Home_images/precision-instruments.jpg",
  },
  {
    title: "Specialized Industrial Machinery",
    description:
      "Equipment selected to meet specific manufacturing and industrial requirements.",
    image: "/images/Home_images/industrial-machinery.jpg",
  },
  {
    title: "Aerospace Equipment",
    description:
      "Specialized equipment supporting aerospace production and engineering operations.",
    image: "/images/Home_images/aerospace-equipment.jpg",
  },
  {
    title: "Engineering Components & Spares",
    description:
      "Components and replacement parts coordinated to support equipment lifecycle needs.",
    image: "/images/Home_images/components.jpg",
  },
];

const serviceDetails = [
  {
    number: "01",
    label: "SERVICE 01",
    title: "Engineering Advisory & Consulting",
    image: "/images/Home_images/technical-advisory.jpg",
    icon: "◎",
    description:
      "We help customers examine complex technical requirements and identify suitable equipment and technology pathways for specialized industrial applications.",
    features: [
      "Technical specification assessment",
      "Technology and solution evaluation",
      "Equipment selection support",
      "Application-specific solution identification",
    ],
  },
  {
    number: "02",
    label: "SERVICE 02",
    title: "Make in India Consulting & Compliance Support",
    image: "/images/products_images/make-in-india.jpg",
    icon: "▤",
    description:
      "We support international manufacturers as they evaluate practical routes into the Indian market and align their approach with applicable localization expectations.",
    features: [
      "Applicable requirement assessment",
      "Localization option evaluation",
      "Local-content guidance",
      "Indian manufacturing partner identification",
    ],
  },
  {
    number: "03",
    label: "SERVICE 03",
    title: "International OEM Representation",
    image: "/images/Home_images/oem-representation.jpg",
    icon: "✥",
    description:
      "We bring market understanding and established relationships to international manufacturers seeking credible, technically informed representation in India.",
    features: [
      "Indian market orientation",
      "Customer and institution engagement",
      "Business development support",
      "Long-term manufacturer representation",
    ],
  },
  {
    number: "04",
    label: "SERVICE 04",
    title: "Equipment Supply",
    image: "/images/Products_images/product_hero.jpg",
    icon: "⬡",
    description:
      "Our equipment supply work is grounded in matching verified technical requirements with specialized solutions from international manufacturers.",
    features: [
      "Advanced industrial machinery",
      "Precision measuring instruments",
      "Specialized equipment and components",
      "Spares and associated supply support",
    ],
  },
  {
    number: "05",
    label: "SERVICE 05",
    title: "Installation & Commissioning",
    image: "/images/Products_images/installation-commissioning.jpg",
    icon: "↗",
    description:
      "We help coordinate the people, information, and manufacturer involvement required to take supplied equipment toward operational readiness.",
    features: [
      "Installation coordination",
      "Manufacturer liaison",
      "Commissioning support",
      "Operational readiness coordination",
    ],
  },
  {
    number: "06",
    label: "SERVICE 06",
    title: "After-Sales Service",
    image: "/images/Products_images/after-sales-service.jpg",
    icon: "♧",
    description:
      "Our role continues beyond equipment supply through dependable communication and coordination for technical and maintenance-related requirements.",
    features: [
      "Technical support facilitation",
      "Service coordination",
      "Maintenance-related assistance",
      "Manufacturer communication support",
    ],
  },
];

function ServiceImage({ service }) {
  return (
    <div className="service-detail-image">
      <img src={service.image} alt={service.title} />
      <span className="service-detail-image-number">{service.number}</span>
    </div>
  );
}

function ServiceContent({ service }) {
  return (
    <div className="service-detail-content">
      <span className="service-detail-icon">{service.icon}</span>

      <p className="service-detail-label">{service.label}</p>

      <h3>{service.title}</h3>

      <p className="service-detail-description">{service.description}</p>

      <ul className="service-detail-features">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <a href="/contact" className="service-detail-button">
        Discuss This Service <span>→</span>
      </a>
    </div>
  );
}

function ProductsServices() {
  return (
    <main className="products-page">
      {/* 1. HERO */}
      <section className="products-hero">
        <div className="products-hero-content">
          <p className="products-eyebrow">PRODUCTS AND SERVICES</p>

          <h1>
            Comprehensive Engineering &amp; Industrial
            <br />
            Solutions
          </h1>

          <p className="products-hero-description">
            Engineering Advisory, international Collaboration, specialized
            equipment supply, localization support, installation, commissioning,
            and dependable after-scales coordination
          </p>
        </div>
      </section>

      {/* One Connected Capability */}
      <section className="connected-capability">
        <div className="capability-content">
          <p className="capability-eyebrow">ONE CONNECTED CAPABILITY</p>

          <h2>
            From the first technical
            <br />
            question to long-term
            <br />
            equipment support.
          </h2>

          <p className="capability-description">
            Our work combines engineering understanding, international
            manufacturer relationships, and Indian market knowledge. This allows
            us to support customers and OEMs through a coordinated path—from
            evaluating a requirement and selecting suitable technology to
            supply, commissioning, and continued service coordination.
          </p>

          <div className="capability-steps">
            <div className="capability-step">
              <span className="step-number">01</span>
              <span>Technology evaluation and equipment selection</span>
            </div>

            <div className="capability-step">
              <span className="step-number">02</span>
              <span>Market access and international representation</span>
            </div>

            <div className="capability-step">
              <span className="step-number">03</span>
              <span>Supply, commissioning, and lifecycle support</span>
            </div>
          </div>
        </div>

        <div className="capability-visual">
          <img
            className="capability-image"
            src="/images/Products_images/technical-equipment.jpg"
            alt="Precision industrial equipment"
          />

          <div className="capability-note">
            <span className="capability-note-icon">◎</span>
            <p>
              Solutions aligned to technical and
              <br />
              market requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services — Equipment Lifecycle */}
      <section className="lifecycle-services">
        <div className="lifecycle-container">
          <div className="lifecycle-heading">
            <p className="lifecycle-eyebrow">OUR SERVICES</p>
            <h2>Expertise across the equipment lifecycle</h2>
            <p className="lifecycle-intro">
              Six connected service areas help reduce complexity for Indian
              customers and international manufacturers.
            </p>
          </div>

          <div className="lifecycle-grid">
            {/* 01 — Engineering Advisory */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/Home_images/technical-advisory.jpg"
                  alt="Industrial engineering equipment"
                />
                <span className="lifecycle-number">01</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">◎</span>
                <h3>Engineering Advisory &amp; Consulting</h3>
                <p>
                  Technical specification assessment, technology evaluation,
                  equipment selection, and application-specific engineering
                  solutions.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>

            {/* 02 — Make in India */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/products_images/make-in-india.jpg"
                  alt="Industrial manufacturing facility"
                />
                <span className="lifecycle-number">02</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">▤</span>
                <h3>Make in India Consulting &amp; Compliance Support</h3>
                <p>
                  Guidance on applicable Make in India requirements,
                  localization options, local-content requirements, and
                  potential Indian manufacturing partnerships.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>

            {/* 03 — OEM Representation */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/Home_images/oem-representation.jpg"
                  alt="Aerospace engine and manufacturing equipment"
                />
                <span className="lifecycle-number">03</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">✥</span>
                <h3>International OEM Representation</h3>
                <p>
                  Connecting global manufacturers with Indian industrial
                  customers, research institutions, and technical organizations
                  while supporting business development.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>

            {/* 04 — Equipment Supply */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/Products_images/product_hero.jpg"
                  alt="Precision industrial equipment"
                />
                <span className="lifecycle-number">04</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">⬡</span>
                <h3>Equipment Supply</h3>
                <p>
                  Sourcing and supplying advanced machinery, precision
                  instruments, specialized equipment, components, and spares
                  from international manufacturers.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>

            {/* 05 — Installation */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/Products_images/installation-commissioning.jpg"
                  alt="Industrial equipment installation"
                />
                <span className="lifecycle-number">05</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">↗</span>
                <h3>Installation &amp; Commissioning</h3>
                <p>
                  Coordinating equipment installation, commissioning, and
                  operational readiness with manufacturers and technical
                  specialists.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>

            {/* 06 — After-Sales Service */}
            <article className="lifecycle-card">
              <div className="lifecycle-image">
                <img
                  src="/images/Products_images/after-sales-service.jpg"
                  alt="Industrial machinery and technical support"
                />
                <span className="lifecycle-number">06</span>
              </div>
              <div className="lifecycle-card-body">
                <span className="lifecycle-icon">♧</span>
                <h3>After-Sales Service</h3>
                <p>
                  Facilitating technical support, service coordination, and
                  maintenance-related assistance throughout the equipment
                  lifecycle.
                </p>
                <a href="/contact" className="lifecycle-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* support desinged around real engineering  */}
      </section>
      <section className="service-detail-section">
        <div className="service-detail-heading">
          <p className="service-detail-eyebrow">SERVICE DETAIL</p>
          <h2>
            Support designed around real engineering
            <br className="service-heading-break" />
            requirements
          </h2>
        </div>

        <div className="service-detail-columns">
          <div className="service-detail-column">
            <ServiceImage service={serviceDetails[0]} />
            <ServiceContent service={serviceDetails[1]} />

            <ServiceImage service={serviceDetails[2]} />
            <ServiceContent service={serviceDetails[3]} />

            <ServiceImage service={serviceDetails[4]} />
            <ServiceContent service={serviceDetails[5]} />
          </div>

          <div className="service-detail-column">
            <ServiceContent service={serviceDetails[0]} />
            <ServiceImage service={serviceDetails[1]} />

            <ServiceContent service={serviceDetails[2]} />
            <ServiceImage service={serviceDetails[3]} />

            <ServiceContent service={serviceDetails[4]} />
            <ServiceImage service={serviceDetails[5]} />
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
                  Technology, specifications and equipment support for critical
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

      <section className="equipment-section">
        <div className="equipment-intro">
          <div className="equipment-heading">
            <p className="equipment-eyebrow">PRODUCTS &amp; EQUIPMENT</p>
            <h1>
              Selected machinery and
              <br />
              precision systems
            </h1>
            <p className="equipment-subtitle">
              Verified machine names and project imagery from the company’s
              supplied project catalogue.
            </p>
          </div>

          <p className="equipment-description">
            Our broader supply capability includes specialized machinery,
            precision measuring instruments, engineering equipment, components,
            and spares from international manufacturers.
          </p>
        </div>

        <div className="equipment-grid">
          {[
            [
              "01",
              "FLEXCAM FZE",
              "ORCA 3553 – 3 Axis CNC Routing Machine",
              "/images/Products_images/orca-3553.jpg",
            ],
            [
              "02",
              "MANUFACTURING TECHNOLOGY, INC.",
              "Friction Stir Welding Machine",
              "/images/Products_images/friction-stir-welding.jpg",
            ],
            [
              "03",
              "SURFACE ENGINEERING",
              "4 Head Belt Grinding Machine – STX 4 Units",
              "/images/Products_images/stx-4.jpg",
            ],
            [
              "04",
              "TECHNO AUTOMATION",
              "LUT Wall Thickness Gauge",
              "/images/Products_images/lut-wall-thickness-gauge.jpg",
            ],
            [
              "05",
              "SURFACE ENGINEERING",
              "6 Head Belt Grinding Machine – STX 6 Units",
              "/images/Products_images/stx-6.jpg",
            ],
            [
              "06",
              "CNC MACHINING",
              "Aero Engine Blade Milling Machine",
              "/images/Products_images/aero-engine-blade-milling.jpg",
            ],
            [
              "07",
              "INTERO ROBOTICS",
              "10kW Fiber Laser Hybrid System & GMAW Base",
              "/images/Products_images/fiber-laser-hybrid.jpg",
            ],
            [
              "08",
              "OXFORD APPLIED RESEARCH",
              "Atomic Oxygen Beam Source – TC 50",
              "/images/Products_images/atomic-oxygen-beam.jpg",
            ],
          ].map(([number, manufacturer, name, image]) => (
            <article className="equipment-card" key={number}>
              <span className="equipment-number">{number}</span>
              <div className="equipment-image">
                <img src={image} alt={name} />
              </div>
              <div className="equipment-card-info">
                <p className="equipment-manufacturer">{manufacturer}</p>
                <h2>{name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <img
              src="/images/Home_images/oem-representation.jpg"
              alt="Aircraft engine in an industrial facility"
            />

            <div className="since-badge">
              <span>SINCE</span>
              <strong>1989</strong>
            </div>
          </div>

          <div className="why-choose-content">
            <p className="why-choose-label">WHY CHOOSE US</p>

            <h2>
              A dependable bridge
              <br />
              between global capability
              <br />
              and Indian industry.
            </h2>

            <div className="why-choose-grid">
              <div className="why-choose-card">
                <span className="why-choose-icon">▦</span>
                <p>Established industry experience since 1989</p>
              </div>

              <div className="why-choose-card">
                <span className="why-choose-icon">↗</span>
                <p>International manufacturer Collaboration</p>
              </div>

              <div className="why-choose-card">
                <span className="why-choose-icon">◎</span>
                <p>Technical understanding and equipment sourcing expertise</p>
              </div>

              <div className="why-choose-card">
                <span className="why-choose-icon">▤</span>
                <p>Support for Indian market entry and localization</p>
              </div>

              <div className="why-choose-card">
                <span className="why-choose-icon">⟳</span>
                <p>Installation coordination and equipment lifecycle support</p>
              </div>

              <div className="why-choose-card">
                <span className="why-choose-icon">♧</span>
                <p>Long-term, dependable business partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="engineering-cta">
        <div className="engineering-cta-content">
          <p className="engineering-cta-label">START A CONVERSATION</p>

          <h2>
            Looking for the Right Engineering
            <br />
            Solution?
          </h2>

          <p className="engineering-cta-description">
            Connect with our team to discuss your technical requirements and
            explore
            <br className="cta-desktop-break" />
            suitable engineering solutions.
          </p>
        </div>

        <a href="/contact" className="engineering-cta-button">
          <span>Discuss Your Requirements</span>
          <span className="engineering-cta-arrow">→</span>
        </a>
      </section>
    </main>
  );
}

export default ProductsServices;
