import React, { useState } from 'react';
import home_picture from '../assets/home-cafe-fausse.webp'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!formData.name) {
      setError('Name is required.');
      return;
    }
    if (!formData.email) {
      setError('Email is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    if (formData.phone_number) {
      data.append('phone_number', formData.phone_number);
    }

    try {
      const response = await fetch('http://localhost:5000/newsletter', {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Successfully subscribed!');
        setFormData({ name: '', email: '', phone_number: '' });
      } else {
        setError(result.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please check your connection.');
    }
  };

  return (
    <main style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      padding: '2rem',
      minHeight: '100vh',
    }}>
      <section style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          color: 'var(--color-secondary)',
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>Welcome to Café Fausse</h1>
        <img 
          src={home_picture}
          alt="Elegant café interior showcasing our cozy ambiance" 
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem'
          }} 
        />
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--color-secondary)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Experience fine dining in a sophisticated setting. Explore our menu, make a reservation, or learn more about us.
        </p>
      </section>

      {/* Contact information and hours */}
      <section style={{
        backgroundColor: 'var(--color-surface)',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        <h2 style={{
          color: 'var(--color-secondary)',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Contact Us</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Address:</strong> 1234 Culinary Ave, Suite 100, Washington, DC 20002
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Phone Number:</strong> (202) 555-4567
        </p>
        <h3 style={{
          color: 'var(--color-secondary)',
          fontSize: '1.5rem',
          marginBottom: '1rem'
        }}>Hours</h3>
        <p style={{ marginBottom: '0.5rem' }}>
          Monday–Saturday: 5:00 PM – 11:00 PM
        </p>
        <p>
          Sunday: 5:00 PM – 9:00 PM
        </p>
      </section>

      {/* Newsletter Signup */}
      <section style={{
        backgroundColor: 'var(--color-surface)',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: 'var(--color-secondary)',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Subscribe to Our Newsletter</h2>
        <p style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: 'var(--color-secondary)'
        }}>
          Stay updated with our latest news, events, and special offers.
        </p>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number (optional):</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'block',
            margin: '0 auto'
          }}>
            Subscribe
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', color: 'green', marginTop: '1rem' }}>{message}</p>}
        {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{error}</p>}
      </section>
    </main>
  );
};

export default Home;