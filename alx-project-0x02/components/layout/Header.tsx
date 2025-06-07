import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Cool Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/about" style={styles.link}>About</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Header;
