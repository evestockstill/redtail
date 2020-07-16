import React from 'react';
import styles from './Footer.css';
import bird from '../../assets/footerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
  const FaceBook = (
    <a target='self'
    href='https://www.facebook.com/search/top?q=red%20tail%20real%20estate%20solutions%20%26%20enterprise'
    className='footerLinks'
    >
     <FontAwesomeIcon
        icon={['fab', 'facebook']}
        className='icons'
        id='faceBook'
      ></FontAwesomeIcon>
    </a>
  );
  const Phone = (
    <a target='self' href='tel: +8004410202' className='footerLinks'>
      <FontAwesomeIcon
        icon='phone'
        className='icons'
        id='phone'
      ></FontAwesomeIcon>
    </a>
  );
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
      <div className={styles.icon}>
        <p>{FaceBook}</p>
        <p>{Phone}</p>
      </div>
    </footer>
  );
};
export default Footer;
