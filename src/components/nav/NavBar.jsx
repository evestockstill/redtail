import React from 'react';
import styles from './NavBar.css';
import Media from 'react-media';
import logo from '../../assets/logoredtail.png';
import smLogo from '../../assets/logoredtailcopy.png';
import midLogo from '../../assets/logoredtailMid.png';
import SideNav from './SideNav';
import Hamburger from './Hamburger';

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Media
            query='(min-width: 900px)'
            render={() => <img src={logo} className={styles.logo_img} />}
          />
          <Media
            query='(min-width: 600px) and (max-width: 899px)'
            render={() => <img src={midLogo} className={styles.logo_img} />}
          />

          <Media
            query='(max-width: 599px)'
            render={() => <img src={smLogo} className={styles.small_img} />}
          />
        </div>
        <Hamburger />
        <SideNav />
      </nav>
    </>
  );
};
export default NavBar;
