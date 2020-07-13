import React from 'react';
import styles from './Footer.css';
import bird from '../../assets/footerLogo.png';

const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <img src={bird}></img>
      </div>
      <div className={styles.nameBox}>
        <h3 className={styles.nameBox}>
          &copy; 2020 Red Tail Real Estate Solutions & Enterprise
        </h3>
      </div>
      <div></div>
    </footer>
  );
};
export default Footer;
