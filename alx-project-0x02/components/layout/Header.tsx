import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Cool Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link href="/home" style={styles.link}>Home</Link></li>
          <li><Link href="/about" style={styles.link}>About</Link></li>
          <li><Link href="/posts" style={styles.link}>Posts</Link></li>
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Header;
