import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <div style={styles.side}></div>
        <h1 style={styles.title}>Café Fausse</h1>
        <div style={styles.burger} onClick={toggleMenu}>
          <div style={styles.burgerLine}></div>
          <div style={styles.burgerLine}></div>
          <div style={styles.burgerLine}></div>
        </div>
      </div>
      {menuOpen && (
        <nav style={styles.navMenu}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/menu" style={styles.link}>Menu</a>
          <a href="/reservations" style={styles.link}>Reservations</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/gallery" style={styles.link}>Gallery</a>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-primary)',
    padding: '20px 30px',
    position: 'relative',
    minHeight: '70px',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
  },
  title: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: 0,
    fontSize: '28px',
    lineHeight: '1.2',
  },
  side: {
    width: '40px',
    height: '30px',
  },
  burger: {
    width: '32px',
    height: '24px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  burgerLine: {
    width: '100%',
    height: '3px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '2px',
  },
  navMenu: {
    position: 'absolute',
    top: '80px',
    right: '30px',
    backgroundColor: 'var(--color-secondary)',
    padding: '15px 20px',
    borderRadius: '6px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 999,
  },
  link: {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    margin: '8px 0',
  },
};


export default Header;
