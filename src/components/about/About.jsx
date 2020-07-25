import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import styles from './About.css';
import Media from 'react-media';
import bishop2 from '../../assets/bishop2.png';
import { Link } from 'react-scroll';

import bishop from '../../assets/bishop.png';

const AboutUs = () => {
  let aboutUs = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite({ delay: 0.7 });
  let content = useRef(null);

  useEffect(() => {
    const mainImage = images.firstElementChild;

    const firsTitle = content.children[0].children[0];
    const secondTitle = firsTitle.nextSibling;
    const thirdTitle = secondTitle.nextSibling;
    const contentP = content.children[1];
   
    TweenMax.to(aboutUs, 0, { css: { visibility: 'visible' } });
    tl.from(mainImage, 1.2, { y: 0, ease: Power3.easeOut }, 0.3)
      .from(
        mainImage.firstElementChild,
        2,
        { scale: 1.2, ease: Power3.easeOut },
        0.2
      );
    tl.staggerFrom(
      [firsTitle.children, secondTitle.children, thirdTitle.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.4 },
      0.10,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.3);
  }, [tl]);
  return (
   
        <section id='AboutUs' className={styles.heroContainer}>
          <div className={styles.hero} ref={(el) => (aboutUs = el)}>
            <div className={styles.container}>
              <div className={styles.heroInner}>
                <div className={styles.heroContent}>
                  <div
                    className={styles.heroContentInner}
                    ref={(el) => (content = el)}
                  >
                    <h1>
                      <div className={styles.heroContentLine}>
                        <div className={styles.heroContentLineInner}>
                          Welcome to Red Tail
                        </div>
                      </div>
                      <div className={styles.heroContentLine}>
                        <div className={styles.heroContentLineInner}>
                          Real Estate Solutions
                        </div>
                      </div>
                      <div className={styles.heroContentLine}>
                        <div className={styles.heroContentLineInner}>
                          & Enterprise
                        </div>
                      </div>
                    </h1>
                    <p>
                      Since 2017 we have been creating pathways of success for
                      our investors and homeowners alike. Red Tail Real Estate
                      Solutions and Enterprise was founded on the idea that
                      helping people get what they need makes the world a better
                      place. We are committed to imparting knowledge on to our
                      clients and finding solutions that turn in to win-win
                      outcomes enriching the lives of everyone involved.
                    </p>
                    <p className={styles.contactP}>
                      <Link
                        activeClass='active'
                        to='calendar-container'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        Schedule Now
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <div
                    className={styles.heroImagesInner}
                    ref={(el) => (images = el)}
                  >
                    <div className={styles.heroImage} id={styles.welcomeImg}>
                      <img src={bishop2} alt='welcome' className={styles.img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default AboutUs;
