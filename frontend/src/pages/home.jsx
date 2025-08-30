import React from 'react';
import home_picture from '../assets/home-cafe-fausse.webp'

const Home = () => {
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
        margin: '0 auto'
      }}>
        <h2 style={{
          color: 'var(--color-primary)',
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
    </main>
  );
};

export default Home;