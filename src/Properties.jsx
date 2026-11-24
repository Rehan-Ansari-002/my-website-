
import { Link } from "react-router-dom";
import "./Properties.css";

function Properties() {
  const services = [
    {
      number: "01",
      category: "SOFTWARE ENGINEERING",
      title: "Custom Software Development",
      description:
        "Purpose-built software for businesses that need more than off-the-shelf tools. From internal business platforms to customer-facing applications.",
      deliverables: [
        "Requirements & discovery",
        "Software architecture",
        "Application development",
        "Production deployment",
        "Technical handover",
      ],
      stack: "Node.js · Python · PostgreSQL · AWS",
    },
    {
      number: "02",
      category: "PRODUCT ENGINEERING",
      title: "SaaS Product Engineering",
      description:
        "Develop software products from an initial concept to a scalable platform, with the architecture and features needed to support your product.",
      deliverables: [
        "Product architecture",
        "React.js development",
        "Authentication & access",
        "Billing integration",
        "Deployment & monitoring",
      ],
      stack: "React.js · Next.js · Node.js · PostgreSQL",
    },
    {
      number: "03",
      category: "ENGINEERING TEAMS",
      title: "Dedicated Developer Pods",
      description:
        "Extend your existing engineering capacity with a dedicated team that works around your product requirements and development workflow.",
      deliverables: [
        "Dedicated developers",
        "Project coordination",
        "Sprint planning",
        "Code collaboration",
        "Progress reporting",
      ],
      stack: "React.js · Node.js · MERN · Your Stack",
    },
    {
      number: "04",
      category: "SOFTWARE QUALITY",
      title: "Testing & Quality Assurance",
      description:
        "Improve product reliability with structured manual and automated testing throughout the software development lifecycle.",
      deliverables: [
        "Test strategy",
        "Functional testing",
        "Automated test suites",
        "Performance testing",
        "Quality reporting",
      ],
      stack: "Playwright · Cypress · Jest · k6",
    },
    {
      number: "05",
      category: "CLOUD ENGINEERING",
      title: "Cloud & Migration",
      description:
        "Modernise existing infrastructure and move applications to cloud environments with a planned migration and deployment approach.",
      deliverables: [
        "Cloud assessment",
        "Migration planning",
        "Infrastructure setup",
        "Application deployment",
        "Performance optimisation",
      ],
      stack: "AWS · GCP · Azure · Docker · Kubernetes",
    },
    {
      number: "06",
      category: "ONGOING ENGINEERING",
      title: "Maintenance & Support",
      description:
        "Keep your software dependable after launch through ongoing maintenance, issue resolution and continuous improvements.",
      deliverables: [
        "Application monitoring",
        "Bug investigation",
        "Dependency updates",
        "Performance reviews",
        "Feature improvements",
      ],
      stack: "Monitoring · GitHub · CI/CD · Cloud",
    },
  ];

  const models = [
    {
      number: "01",
      title: "Dedicated Team",
      description:
        "A dedicated engineering team aligned with your product and development workflow.",
      points: [
        "Dedicated engineering resources",
        "Sprint-based collaboration",
        "Monthly engagement",
        "Flexible team scaling",
      ],
      label: "TEAM ENGAGEMENT",
    },
    {
      number: "02",
      title: "Team Augmentation",
      description:
        "Add development capacity to your existing team when additional skills or resources are needed.",
      points: [
        "Additional developers",
        "Integration with your team",
        "Flexible resource planning",
        "Ongoing collaboration",
      ],
      label: "RESOURCE ENGAGEMENT",
    },
    {
      number: "03",
      title: "Project Based",
      description:
        "A defined project scope with agreed deliverables, milestones and development objectives.",
      points: [
        "Defined project scope",
        "Milestone planning",
        "Fixed-price option",
        "Time-and-material option",
      ],
      label: "PROJECT ENGAGEMENT",
    },
  ];

  return (
    <main className="properties-page">

      {/* HERO */}
      <section className="properties-hero">
        <div className="properties-container properties-hero-layout">

          <div className="properties-hero-copy">
            <span className="properties-eyebrow">
              STEP TO SOFT / OUR SERVICES
            </span>

            <h1>
              Engineering Services
              <span> For What Comes Next.</span>
            </h1>

            <p>
              From custom software and SaaS products to dedicated
              engineering teams, we help businesses design,
              develop and maintain digital solutions.
            </p>

            <div className="properties-hero-actions">
              <Link to="/contact" className="properties-primary-btn">
                Discuss Your Project ↗
              </Link>

              <a href="#all-services" className="properties-outline-btn">
                Explore Services ↓
              </a>
            </div>

            <div className="properties-hero-note">
              SOFTWARE DEVELOPMENT · ENGINEERING · TECHNOLOGY
            </div>
          </div>

          <div className="properties-hero-visual">
            <div className="properties-visual-heading">
              <span>ENGINEERING CAPABILITIES</span>
              <span>2026</span>
            </div>

            <div className="capability-center">
              <div className="capability-ring">
                <div className="capability-logo">S2S</div>
              </div>
              <h3>One Engineering Studio.</h3>
              <p>Multiple Ways To Build.</p>
            </div>

            <div className="capability-footer">
              <span>DESIGN</span>
              <span>DEVELOP</span>
              <span>DELIVER</span>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="properties-intro properties-container">
        <div className="properties-section-label">
          <span>01 / OUR CAPABILITIES</span>
          <div></div>
        </div>

        <div className="properties-intro-layout">
          <h2>
            Six Practices.
            <span> One Engineering Studio.</span>
          </h2>

          <p>
            Choose an individual service or combine multiple
            engineering capabilities to support your product
            development requirements.
          </p>
        </div>
      </section>

      {/* SERVICE CATALOGUE */}
      <section className="properties-catalogue" id="all-services">
        <div className="properties-container">

          <div className="properties-catalogue-heading">
            <div>
              <span className="properties-eyebrow">
                02 / SERVICE CATALOGUE
              </span>
              <h2>What We Do.</h2>
            </div>

            <p>
              Explore our software development and engineering
              services, built around different business needs.
            </p>
          </div>

          <div className="properties-service-list">
            {services.map((service) => (
              <article
                className="properties-service"
                key={service.number}
              >
                <div className="properties-service-number">
                  /{service.number}
                </div>

                <div className="properties-service-main">
                  <span className="service-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-deliverables">
                    <h4>KEY DELIVERABLES</h4>

                    <ul>
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-stack">
                    <strong>TECHNOLOGY</strong>
                    <span>{service.stack}</span>
                  </div>
                </div>

                <div className="properties-service-action">
                  <Link to="/contact" aria-label={`Enquire about ${service.title}`}>
                    ↗
                  </Link>
                  <span>ENQUIRE</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="properties-engagement">
        <div className="properties-container">

          <div className="properties-catalogue-heading">
            <div>
              <span className="properties-eyebrow">
                03 / HOW TO WORK WITH US
              </span>
              <h2>Flexible Engagement Models.</h2>
            </div>

            <p>
              Different projects need different working
              arrangements. Choose an approach that suits
              your scope and team requirements.
            </p>
          </div>

          <div className="engagement-grid">
            {models.map((model) => (
              <article className="engagement-card" key={model.number}>
                <span className="engagement-number">
                  {model.number}
                </span>

                <span className="engagement-label">
                  {model.label}
                </span>

                <h3>{model.title}</h3>

                <p>{model.description}</p>

                <ul>
                  {model.points.map((point) => (
                    <li key={point}>
                      <span>✓</span> {point}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  Discuss This Model ↗
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="properties-stack">
        <div className="properties-container stack-layout">

          <div>
            <span className="properties-eyebrow">
              04 / TECHNOLOGY STACK
            </span>

            <h2>
              The Right Tools
              <span> For The Right Solution.</span>
            </h2>

            <p>
              Our engineering capabilities span frontend,
              backend, databases and cloud infrastructure.
            </p>
          </div>

          <div className="properties-stack-list">
            {[
              "React.js", "Next.js", "Node.js", "Python",
              "JavaScript", "PostgreSQL", "MongoDB",
              "Redis", "AWS", "GCP", "Azure", "Docker",
              "Kubernetes", "Vercel"
            ].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="properties-process properties-container">
        <div className="properties-catalogue-heading">
          <div>
            <span className="properties-eyebrow">
              05 / OUR PROCESS
            </span>
            <h2>How We Ship.</h2>
          </div>

          <p>
            A structured development process helps maintain
            clear communication and predictable milestones.
          </p>
        </div>

        <div className="properties-process-grid">

          <div>
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Understand your requirements and define
              the project scope.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Architect</h3>
            <p>
              Plan the technical architecture and
              development milestones.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Build</h3>
            <p>
              Develop, test and review the product
              through structured sprints.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Run</h3>
            <p>
              Deploy, maintain and improve the
              application over time.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="properties-cta">
        <div className="properties-container properties-cta-layout">

          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something that matters.</h2>
            <p>
              Share your requirements and explore the
              right engineering approach for your project.
            </p>
          </div>

          <Link to="/contact" className="properties-cta-btn">
            Start a Conversation ↗
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="properties-footer">
        <div className="properties-container">

          <div className="properties-footer-main">

            <div>
              <h2>STEP TO SOFT<span>.</span></h2>
              <p>
                Custom software, SaaS engineering and
                dedicated development teams.
              </p>
            </div>

            <div className="properties-footer-links">
              <h3>Company</h3>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/properties">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="properties-footer-links">
              <h3>Contact</h3>
              <a href="mailto:info@steptosoft.com">
                info@steptosoft.com
              </a>
              <a href="tel:+913413556956">
                +91 341 355 6956
              </a>
            </div>

          </div>

          <div className="properties-footer-bottom">
            <p>© 2026 Step To Soft. All rights reserved.</p>
            <p>Software Engineering · Asansol, India</p>
          </div>

        </div>
      </footer>

    </main>
  );
}

export default Properties;
