import React from 'react';
import styles from './Footer.css';
import bird from '../../assets/footerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
  const FaceBook = (
    <a
      target='self'
      href='https://www.facebook.com/redtailrealestate'
      className='footerLinks'
    >
      <FontAwesomeIcon
        icon={['fab', 'facebook']}
        className='icons'
        id='faceBook'
      ></FontAwesomeIcon>
    </a>
  );
  const Insta = (
    <a target='self'
      href='https://www.instagram.com/red_tail_funding/'
    className='footerLinks'
    >
     <FontAwesomeIcon
        icon={['fab', 'instagram']}
        className='icons'
        id='insta'
      ></FontAwesomeIcon>
    </a>
  );
  const Phone = (
    <a target='self' href='tel: +18004410202' className='footerLinks'>
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
        <p>{Insta}</p>
        <p>{Phone}</p>
      </div>
    </footer>
  );
};
export default Footer;
