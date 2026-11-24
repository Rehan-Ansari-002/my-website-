
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    password: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleRegister(e) {
    e.preventDefault();

    // Demo only: actual account database mein create nahi hota
    alert("Registration demo completed! Please login.");
    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>
        <p>Register as a new student</p>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Select Course</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          >
            <option value="">Choose course</option>
            <option value="Class 9-10">Class 9-10</option>
            <option value="Class 11-12">Class 11-12</option>
            <option value="Computer Course">Computer Course</option>
          </select>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>

        </form>

        <p className="auth-bottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
