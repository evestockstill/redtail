import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';
// import styles from './MainInfo.css';
import styles from './SecondMainInfo.css';

gsap.registerPlugin(ScrollTrigger);

const InfoSection = ({ title, img, text, link, secId, pId }) => {
  const pContent = useRef(null);
  const pImage = useRef(null);
  const pSection = useRef(null);

  useEffect(() => {
    gsap.to(pContent.current, {
      yPercent: -90,
      ease: 'none',
      scrollTrigger: {
        trigger: pSection.current,

        scrub: true,
      },
    });

    gsap.to(pImage.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: pSection.current,

        scrub: true,
      },
    }),
    [pContent, pImage];
  });

  return (
    <div id={secId} className={`${styles.greenSock_container} ${styles[secId]}`}>
      <section ref={pSection} className={styles.pSection}>
        <div className={styles.pContainer}>
          <div ref={pContent} className={`${styles.pContent} ${styles[pId]}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.paragraph}>{text}</p>
            <Link activeClass="active" to="calendar-container" spy={true} smooth={true} offset={0} duration={500}>{link}</Link>
          </div>
        </div>

        <img ref={pImage} className={styles.pImage} src={`https://raw.githubusercontent.com/evestockstill/redtail/master/src/assets/${img}.jpg`}></img>
      </section>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  secId: PropTypes.string.isRequired,
  pId: PropTypes.string
};

export default InfoSection;
