import React, { useState } from 'react';
import axios from 'axios';


const ContactForm = () => {
  const [form, setForm] = useState({ email: '', password: ''});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('✅ Message sent successfully!');
      setForm({ email: '', password: ''});
    } catch (err) {
      console.error(err);
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
    <div className="card shadow-sm p-4 mx-auto" style={{ width: '400px' }}>
      <h2 className="mb-4 text-center">Sign up</h2>
      <form onSubmit={handleSubmit}>
        

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            className="form-control"
            placeholder=""
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Proceed</button>
      </form>

      {status && (
        <div className="alert mt-3 p-2 text-center" style={{ backgroundColor: '#f8f9fa' }}>
          {status}
        </div>
      )}
    </div>
    </div>
  );
};

export default ContactForm;
