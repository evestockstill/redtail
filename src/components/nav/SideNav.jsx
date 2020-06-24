import React from 'react';
import styles from './SideNav.css';

const SideNav = () => {
  return (
    <ul className={styles.sideNavUl}>
      <li>About Us</li>
      <li>Pre-Foreclosure</li>
      <li>Probate</li>
      <li>Ugly Houses</li>
      <li>Private Money</li>
      <li>Contact Us</li>
    </ul>
  );
};
export default SideNav;
