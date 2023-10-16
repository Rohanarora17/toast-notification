import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        This project is from{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rohanarora17">
          Rohan Arora &hearts;
        </a>
        
      </p>
      
    </footer>
  );
}

export default Footer;
