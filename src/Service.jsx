
import { useNavigate } from "react-router-dom";
import "./Service.css";

function Service() {
  const navigate = useNavigate();

  const services = [
    {
      number: "01",
      icon: "🌐",
      title: "HTML Tutorial",
      description:
        "Learn HTML from the basics to advanced concepts and build the structure of modern websites.",
      level: "Beginner",
      duration: "Start Learning",
      topics: ["HTML Elements", "Forms", "Tables", "Semantic HTML"],
      path: "/html"
    },
    {
      number: "02",
      icon: "🎨",
      title: "CSS Tutorial",
      description:
        "Master CSS styling, layouts, animations and responsive web design.",
      level: "Beginner to Advanced",
      duration: "Start Learning",
      topics: ["Selectors", "Flexbox", "Grid", "Responsive Design"],
      path: "/css"
    },
    {
      number: "03",
      icon: "⚡",
      title: "JavaScript Tutorial",
      description:
        "Learn JavaScript programming and create interactive web applications.",
      level: "Intermediate",
      duration: "Start Learning",
      topics: ["Variables", "Functions", "Arrays", "DOM"],
      path: "/javascript"
    },
    {
      number: "04",
      icon: "⚛️",
      title: "React Tutorial",
      description:
        "Build modern user interfaces using React components, hooks and state.",
      level: "Intermediate",
      duration: "Start Learning",
      topics: ["Components", "Props", "Hooks", "React Router"],
      path: "/react"
    },
    {
      number: "05",
      icon: "🟢",
      title: "Node.js Tutorial",
      description:
        "Understand backend development and create server-side applications.",
      level: "Advanced",
      duration: "Start Learning",
      topics: ["Modules", "Express", "API", "Database"],
      path: "/nodejs"
    },
    {
      number: "06",
      icon: "🐍",
      title: "Python Tutorial",
      description:
        "Learn Python programming, problem solving and programming fundamentals.",
      level: "Beginner",
      duration: "Start Learning",
      topics: ["Variables", "Loops", "Functions", "OOP"],
      path: "/python"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Learn the Basics",
      description: "Understand the fundamentals before moving to advanced topics."
    },
    {
      number: "02",
      title: "Practice Regularly",
      description: "Write code and solve small programming challenges."
    },
    {
      number: "03",
      title: "Build Projects",
      description: "Apply your knowledge by creating practical projects."
    },
    {
      number: "04",
      title: "Improve Your Skills",
      description: "Review your work and keep learning new concepts."
    }
  ];

  return (
    <main className="service-page">

      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-container service-hero-grid">

          <div className="service-hero-content">
            <span className="service-eyebrow">
              <span></span>
              LEARN • PRACTICE • BUILD
            </span>

            <h1>
              Explore Our
              <span> Learning Programs.</span>
            </h1>

            <p>
              Improve your programming skills with structured
              tutorials, practical examples and a clear learning
              path from beginner to advanced.
            </p>

            <div className="service-hero-actions">
              <a href="#all-services" className="service-btn service-btn-primary">
                Explore Tutorials →
              </a>

              <a href="#learning-path" className="service-btn service-btn-outline">
                View Learning Path
              </a>
            </div>

            <div className="service-hero-note">
              Learn at your own pace. Build skills step by step.
            </div>
          </div>

          <div className="service-hero-visual">
            <div className="service-code-card">
              <div className="service-code-header">
                <div>
                  <i></i><i></i><i></i>
                </div>
                <span>learning.js</span>
              </div>

              <div className="service-code-content">
                <p><span>01</span> const future = "Developer";</p>
                <p><span>02</span> function learn() {"{"}</p>
                <p><span>03</span> &nbsp; return "Keep Building";</p>
                <p><span>04</span> {"}"}</p>
                <p><span>05</span> learn();</p>

                <div className="service-code-result">
                  <span>●</span> Output: Keep Learning!
                </div>
              </div>
            </div>

            <div className="service-floating-tag">
              <span>⚡</span>
              Practical Learning
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="service-courses" id="all-services">
        <div className="service-container">

          <div className="service-section-heading">
            <div>
              <span className="service-label">OUR PROGRAMS</span>
              <h2>Explore Our Tutorials</h2>
              <p>
                Choose a technology and start building your skills.
              </p>
            </div>
          </div>

          <div className="service-card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>

                <div className="service-card-top">
                  <div className="service-card-icon">
                    {service.icon}
                  </div>
                  <span>{service.number}</span>
                </div>

                <span className="service-level">
                  {service.level}
                </span>

                <h3>{service.title}</h3>

                <p className="service-card-description">
                  {service.description}
                </p>

                <div className="service-topics">
                  {service.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>

                <button
                  className="service-read-more"
                  onClick={() => navigate(service.path)}
                >
                  {service.duration}
                  <span>→</span>
                </button>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Learning Path */}
      <section className="service-learning" id="learning-path">
        <div className="service-container">

          <div className="service-section-heading service-center-heading">
            <span className="service-label">YOUR LEARNING JOURNEY</span>
            <h2>How to Learn Effectively</h2>
            <p>
              Follow a simple process to turn knowledge into practical skills.
            </p>
          </div>

          <div className="service-step-grid">
            {steps.map((step) => (
              <div className="service-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-container service-cta-inner">
          <div>
            <span>START YOUR JOURNEY</span>
            <h2>Ready to Improve Your Skills?</h2>
            <p>
              Choose your first tutorial and start learning today.
            </p>
          </div>

          <a href="#all-services" className="service-btn service-btn-light">
            Explore Tutorials →
          </a>
        </div>
      </section>

    </main>
  );
}

export default Service;
