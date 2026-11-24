
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name: email.split("@")[0],
      email: email,
      role: role
    };

    // Frontend demo only
    localStorage.setItem("authUser", JSON.stringify(user));

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Welcome Back!</h1>
        <p>Login to your account</p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <label>Login As</label>
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="admin">Admin (Demo)</option>
          </select>

          <button type="submit">Login</button>

        </form>

        <p className="auth-bottom">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
