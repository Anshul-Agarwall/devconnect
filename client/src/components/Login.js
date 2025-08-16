import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.email, form.password);
  };

return (

    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
  <h1 className="mb-4 text-white">Welcome to SpiceHub</h1>

  <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
    <h2 className="mb-4 text-center">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
    <div className="mt-3 text-center">
    <div className="mt-3 text-center">
    <p>
        Don't have an account? <Link to="/contact">Sign up here</Link>
    </p>
    </div>
    </div>
  </div>
</div>

);
}

export default LoginForm;
