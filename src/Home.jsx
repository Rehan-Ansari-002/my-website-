
import "./Home.css";

function Home() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and user-friendly websites designed to support your business goals.",
      icon: "⌘"
    },
    {
      number: "02",
      title: "Software Development",
      description:
        "Custom software solutions designed to improve workflows and simplify business operations.",
      icon: "⚙"
    },
    {
      number: "03",
      title: "Digital Solutions",
      description:
        "Practical digital services to help businesses build and improve their online presence.",
      icon: "◈"
    },
    {
      number: "04",
      title: "IT Consulting",
      description:
        "Technology guidance to help you understand requirements and plan your digital projects.",
      icon: "⌁"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description: "Understand your business goals and project requirements."
    },
    {
      number: "02",
      title: "Plan",
      description: "Prepare a clear strategy and development roadmap."
    },
    {
      number: "03",
      title: "Develop",
      description: "Build and refine the solution according to the requirements."
    },
    {
      number: "04",
      title: "Deliver",
      description: "Review the final work and prepare it for launch."
    }
  ];

  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-container">

          <div className="home-hero-content">
            <span className="home-eyebrow">
              <span className="home-dot"></span>
              TECHNOLOGY & DIGITAL SOLUTIONS
            </span>

            <h1>
              Building Digital
              <span> Solutions for </span>
              Modern Businesses.
            </h1>

            <p>
              We focus on technology-driven solutions that help
              businesses improve their digital presence, simplify
              processes and move forward with confidence.
            </p>

            <div className="home-hero-actions">
              <a href="/contact" className="home-btn home-btn-primary">
                Let's Talk <span>→</span>
              </a>

              <a href="/about" className="home-btn home-btn-secondary">
                Explore More
              </a>
            </div>

            <div className="home-hero-note">
              <span className="home-note-line"></span>
              Technology • Creativity • Innovation
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="home-visual-card">
              <div className="home-visual-top">
                <span className="home-window-dots">
                  <i></i><i></i><i></i>
                </span>
                <span>Digital Workspace</span>
              </div>

              <div className="home-visual-body">
                <div className="home-visual-icon">S</div>
                <span className="home-visual-caption">
                  STEP TO SOFT
                </span>
                <h2>Ideas into Digital Solutions.</h2>
                <p>
                  Creating meaningful digital experiences
                  through technology.
                </p>

                <div className="home-visual-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="home-visual-bottom">
                  <span>DESIGN</span>
                  <span>DEVELOPMENT</span>
                  <span>TECHNOLOGY</span>
                </div>
              </div>
            </div>

            <div className="home-floating-card">
              <span>✦</span>
              <div>
                <strong>Digital Innovation</strong>
                <small>Ideas built with purpose</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="home-intro">
        <div className="home-section-container home-intro-grid">
          <div>
            <span className="home-section-label">WHO WE ARE</span>
            <h2>
              Technology that
              <span> moves businesses forward.</span>
            </h2>
          </div>

          <div className="home-intro-text">
            <p>
              Step To Soft focuses on digital and technology-based
              solutions. Our approach starts with understanding
              requirements and creating solutions around real
              business needs.
            </p>

            <a href="/about" className="home-text-link">
              Discover Our Company <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-services">
        <div className="home-section-container">

          <div className="home-section-heading">
            <div>
              <span className="home-section-label">WHAT WE DO</span>
              <h2>Our Services</h2>
              <p>
                Digital services designed around your business needs.
              </p>
            </div>

            <a href="/contact" className="home-text-link">
              Discuss a Project <span>→</span>
            </a>
          </div>

          <div className="home-service-grid">
            {services.map((service) => (
              <div className="home-service-card" key={service.number}>
                <div className="home-service-top">
                  <span className="home-service-icon">
                    {service.icon}
                  </span>
                  <span className="home-service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="/contact" className="home-service-link">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-approach">
        <div className="home-section-container home-approach-grid">

          <div className="home-approach-content">
            <span className="home-section-label">
              OUR APPROACH
            </span>

            <h2>
              Focused on solving
              <span> real problems.</span>
            </h2>

            <p>
              Every project starts with a clear understanding
              of what needs to be achieved. We focus on planning,
              practical development and solutions that serve
              their intended purpose.
            </p>

            <a href="/about" className="home-btn home-btn-primary">
              About Our Approach <span>→</span>
            </a>
          </div>

          <div className="home-approach-list">
            <div>
              <span>01</span>
              <h3>Understanding Requirements</h3>
              <p>Start with the problem, goals and expectations.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Practical Planning</h3>
              <p>Choose an appropriate direction for the project.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Quality Development</h3>
              <p>Focus on usability, functionality and consistency.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="home-process">
        <div className="home-section-container">

          <div className="home-centered-heading">
            <span className="home-section-label">HOW WE WORK</span>
            <h2>From Idea to Execution</h2>
            <p>
              A clear process helps turn project requirements
              into practical digital solutions.
            </p>
          </div>

          <div className="home-process-grid">
            {process.map((item) => (
              <div className="home-process-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-cta">
        <div className="home-cta-container">
          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h2>Let's Build Something Meaningful.</h2>
            <p>
              Tell us about your requirements and let's discuss
              the right digital solution for your project.
            </p>
          </div>

          <a href="/contact" className="home-cta-btn">
            Contact Us <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;
