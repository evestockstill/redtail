/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import Private from '../../assets/PrivateMoney.jpg';
import styles from './MainInfo.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PrivateMoney = ({ title, img, text, link }) => {
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
    <>
      <div id={styles.Private} className={styles.greenSock_container}>
        <section ref={pSection} className={styles.pSection}>
          <div className={styles.pContainer}>
            <div ref={pContent} className={styles.pContent} id={styles.color_3}>
              <h2 className={styles.title}>Private Money</h2>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                laboriosam quibusdam tempora et vitae reiciendis rem amet
                accusamus at ipsum. Suscipit voluptates animi eaque? Placeat
                earum, amet harum quas laudantium debitis ratione consequuntur
                nesciunt nostrum voluptatum officiis nulla quidem dolores
                corporis, voluptate aperiam officia, velit quaerat impedit
                porro! Quidem, at?
              </p>

              <a href='https:/evestockstill.com'>set appointment</a>
            </div>
          </div>

          <img ref={pImage} className={styles.pImage} src={Private}></img>
        </section>
      </div>
    </>
  );
};
export default PrivateMoney;
