
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const values = [
    {
      number: "01",
      title: "Own the Outcome",
      description:
        "We focus on delivering meaningful results, not simply completing tasks or closing tickets.",
    },
    {
      number: "02",
      title: "No Freelancers",
      description:
        "Our published approach is built around an in-house engineering team with clear accountability.",
    },
    {
      number: "03",
      title: "Boring Is Good",
      description:
        "We prefer dependable technology choices that solve the problem instead of following hype.",
    },
    {
      number: "04",
      title: "Daily Ground Truth",
      description:
        "Regular communication, daily progress visibility and clear updates keep projects transparent.",
    },
  ];

  const facts = [
    { number: "2018", label: "Founded" },
    { number: "25", label: "In-house Engineers" },
    { number: "120+", label: "Engagements" },
    { number: "18", label: "Countries Served" },
  ];

  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-container about-hero-layout">

          <div className="about-hero-content">
            <span className="about-eyebrow">
              ABOUT STEP TO SOFT / OUR STORY
            </span>

            <h1>
              Engineering Ideas.
              <span> Building What Matters.</span>
            </h1>

            <p>
              We are a software development company based
              in Asansol, India, building custom software,
              SaaS products and digital solutions for
              businesses around the world.
            </p>

            <div className="about-hero-actions">
              <Link to="/contact" className="about-primary-btn">
                Work With Us <span>↗</span>
              </Link>

              <Link to="/properties" className="about-secondary-btn">
                Explore Our Services
              </Link>
            </div>

            <div className="about-location">
              ASANSOL, WEST BENGAL, INDIA
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-top">
              <span>STEP TO SOFT</span>
              <span>EST. 2018</span>
            </div>

            <div className="about-visual-center">
              <div className="about-visual-ring">
                <div className="about-visual-logo">
                  S<span>2</span>S
                </div>
              </div>

              <h3>Built on Engineering.</h3>
              <p>Driven by Outcomes.</p>
            </div>

            <div className="about-visual-bottom">
              SOFTWARE ENGINEERING · INDIA
            </div>
          </div>

        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-story about-container">

        <div className="about-section-label">
          <span>01 / OUR STORY</span>
          <div></div>
        </div>

        <div className="about-story-layout">

          <div>
            <h2>
              A Studio Built Around
              <span> Better Engineering.</span>
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              Step To Soft was founded in 2018 by product
              engineers who wanted to approach software
              development differently.
            </p>

            <p>
              The idea was simple: build an engineering
              studio where teams work together in-house,
              protect client information and maintain
              clear communication throughout development.
            </p>

            <p>
              Today, the company focuses on custom software,
              SaaS engineering, web applications, dedicated
              development teams and technology solutions.
            </p>

            <Link to="/contact" className="about-text-link">
              Start a Conversation <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* COMPANY FACTS */}
      <section className="about-facts">
        <div className="about-container">

          <div className="about-facts-heading">
            <span>02 / THE STUDIO</span>
            <h2>Our Company At A Glance.</h2>
            <p>
              Company figures published on the official
              Step To Soft website.
            </p>
          </div>

          <div className="about-facts-grid">
            {facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <strong>{fact.number}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="about-work about-container">

        <div className="about-section-label">
          <span>03 / HOW WE WORK</span>
          <div></div>
        </div>

        <div className="about-work-heading">
          <h2>
            A Different Approach
            <span> To Software Development.</span>
          </h2>

          <p>
            Our working model focuses on accountability,
            confidentiality and consistent project visibility.
          </p>
        </div>

        <div className="about-work-grid">

          <article className="about-work-card">
            <span className="work-number">01</span>
            <h3>In-house Engineers</h3>
            <p>
              Our published model emphasizes an in-house
              engineering team instead of freelance delivery.
            </p>
          </article>

          <article className="about-work-card">
            <span className="work-number">02</span>
            <h3>Daily Progress</h3>
            <p>
              Daily standups, code updates and a regular
              delivery rhythm help clients follow progress.
            </p>
          </article>

          <article className="about-work-card">
            <span className="work-number">03</span>
            <h3>Confidentiality First</h3>
            <p>
              Client confidentiality and NDA protection
              are part of the company's published approach.
            </p>
          </article>

          <article className="about-work-card">
            <span className="work-number">04</span>
            <h3>Flexible Engagement</h3>
            <p>
              Fixed-price, hourly and monthly retainer
              models can be selected according to project needs.
            </p>
          </article>

        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="about-values">

        <div className="about-container">

          <div className="about-values-heading">
            <span>04 / OUR VALUES</span>
            <h2>Four Rules We Work By.</h2>
            <p>
              The principles behind our engineering culture
              and everyday decisions.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="about-tech about-container">

        <div className="about-tech-copy">
          <span>05 / ENGINEERING CAPABILITIES</span>
          <h2>
            Technology That
            <span> Moves With Your Goals.</span>
          </h2>

          <p>
            Our engineering capabilities cover modern
            frontend, backend, databases and cloud
            technologies for software products.
          </p>
        </div>

        <div className="about-tech-stack">
          {[
            "React.js",
            "Node.js",
            "Next.js",
            "Python",
            "JavaScript",
            "MongoDB",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Azure",
            "Redis",
            "Kubernetes",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-layout">

          <div>
            <span>LET'S BUILD TOGETHER</span>
            <h2>Have an idea worth building?</h2>
            <p>
              Tell us about your project and let's explore
              the right engineering approach.
            </p>
          </div>

          <Link to="/contact" className="about-cta-btn">
            Discuss Your Project ↗
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <div className="about-container">

          <div className="about-footer-main">

            <div>
              <h2>STEP TO SOFT<span>.</span></h2>
              <p>
                Custom software, SaaS engineering and
                dedicated development teams.
              </p>
              <small>ASANSOL, WEST BENGAL, INDIA</small>
            </div>

            <div className="about-footer-links">
              <h3>Company</h3>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/properties">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="about-footer-links">
              <h3>Contact</h3>
              <a href="mailto:info@steptosoft.com">
                info@steptosoft.com
              </a>
              <a href="tel:+913413556956">
                +91 341 355 6956
              </a>
            </div>

          </div>

          <div className="about-footer-bottom">
            <p>© 2026 Step To Soft. All rights reserved.</p>
            <p>Software Engineering · Asansol, India</p>
          </div>

        </div>
      </footer>

    </main>
  );
}

export default About;
