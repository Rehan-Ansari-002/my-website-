
import { useState } from "react";
import "./State.css";

function State() {
  const [count, setCount] = useState(0);

  return (
    <main className="us-page">

      {/* Hero Section */}
      <section className="us-hero">
        <div className="us-hero-content">
          <span className="us-label">REACT DEVELOPMENT / HOOKS</span>
          <h1>Master React useState Hook</h1>
          <p>
            Understand how React manages component data, handles
            user interactions, and updates the user interface
            dynamically.
          </p>

          <div className="us-hero-buttons">
            <a href="#learn" className="us-btn us-btn-primary">
              Start Learning
            </a>
            <a href="#example" className="us-btn us-btn-outline">
              View Examples
            </a>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="us-layout">

        {/* Sidebar */}
        <aside className="us-sidebar">
          <h3>On This Page</h3>
          <a href="#learn">Introduction</a>
          <a href="#syntax">Syntax</a>
          <a href="#working">How It Works</a>
          <a href="#example">Practical Example</a>
          <a href="#benefits">Why useState?</a>
        </aside>

        {/* Main Content */}
        <article className="us-content">

          <section id="learn" className="us-section">
            <span className="us-section-tag">01 — INTRODUCTION</span>
            <h2>What is useState in React?</h2>

            <p>
              useState is a built-in React Hook that allows functional
              components to store and manage data. When the state
              changes, React updates the component's user interface.
            </p>

            <p>
              For example, a counter, form input, login status,
              dropdown menu and shopping cart can all use state.
            </p>
          </section>

          <section id="syntax" className="us-section">
            <span className="us-section-tag">02 — BASIC SYNTAX</span>
            <h2>Understanding the Syntax</h2>

            <div className="us-code">
              <div className="us-code-header">
                <span>JavaScript</span>
                <span>React Hook</span>
              </div>
              <pre>
                <code>{`const [state, setState] = useState(initialValue);`}</code>
              </pre>
            </div>

            <div className="us-info-grid">
              <div>
                <h4>state</h4>
                <p>Stores the current value.</p>
              </div>
              <div>
                <h4>setState</h4>
                <p>Updates the state value.</p>
              </div>
              <div>
                <h4>initialValue</h4>
                <p>Sets the starting value.</p>
              </div>
            </div>
          </section>

          <section id="working" className="us-section">
            <span className="us-section-tag">03 — HOW IT WORKS</span>
            <h2>How Does useState Work?</h2>

            <div className="us-steps">
              <div className="us-step">
                <span>1</span>
                <div>
                  <h4>Initialize State</h4>
                  <p>React creates a state value with an initial value.</p>
                </div>
              </div>

              <div className="us-step">
                <span>2</span>
                <div>
                  <h4>Update State</h4>
                  <p>Call the setter function to request a state update.</p>
                </div>
              </div>

              <div className="us-step">
                <span>3</span>
                <div>
                  <h4>Re-render Component</h4>
                  <p>React renders the component again with the updated value.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="example" className="us-section">
            <span className="us-section-tag">04 — PRACTICAL EXAMPLE</span>
            <h2>Build a Counter Application</h2>

            <p>
              This example demonstrates how to update a number
              using the useState Hook.
            </p>

            <div className="us-code">
              <div className="us-code-header">
                <span>Counter.jsx</span>
                <span>Example Code</span>
              </div>
              <pre>
                <code>{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{'Count: {count}'}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`}</code>
              </pre>
            </div>

            <div className="us-demo">
              <div className="us-demo-heading">
                <div>
                  <span>LIVE INTERACTIVE DEMO</span>
                  <h3>Try It Yourself</h3>
                </div>
                <span className="us-live-dot">LIVE</span>
              </div>

              <p>Click the buttons to update the state.</p>

              <div className="us-count">{count}</div>

              <div className="us-demo-actions">
                <button onClick={() => setCount(count - 1)}>
                  − Decrease
                </button>
                <button onClick={() => setCount(0)}>
                  Reset
                </button>
                <button onClick={() => setCount(count + 1)}>
                  + Increase
                </button>
              </div>
            </div>
          </section>

          <section id="benefits" className="us-section">
            <span className="us-section-tag">05 — KEY BENEFITS</span>
            <h2>Why Should You Use useState?</h2>

            <ul className="us-benefits">
              <li>Manage changing data inside components.</li>
              <li>Build interactive user interfaces.</li>
              <li>Handle form inputs and user interactions.</li>
              <li>Update UI automatically when state changes.</li>
              <li>Keep component logic organized and reusable.</li>
            </ul>
          </section>

          <div className="us-next">
            <div>
              <span>NEXT TOPIC</span>
              <h3>React useEffect Hook</h3>
              <p>Learn how to handle side effects in React.</p>
            </div>
            <span className="us-next-arrow">→</span>
          </div>

        </article>
      </div>
    </main>
  );
}

export default State;
