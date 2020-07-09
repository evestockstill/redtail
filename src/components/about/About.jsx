import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import styles from './About.css';
import home from '../../assets/istockUglyHome.jpg';
import money from '../../assets/PrivateMoney.jpg';

const AboutUs = () => {
  let myApp = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  let content = useRef(null);

  useEffect(() => {
    const girlImage = images.firstElementChild;
    const dogImage = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headLineSecond = headlineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.children[1];
    const contentBtn = content.children[2];
    // avoid flash
    TweenMax.to(myApp, 0, { css: { visibility: 'visible' } });
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(dogImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        dogImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );
    tl.staggerFrom(
      [headlineFirst.children, headLineSecond.children, headLineThird.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.8 },
      0.15,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero} ref={(el) => (myApp = el)}>
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
                      Hello! I am Eve
                    </div>
                  </div>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      this is my dog Isla
                    </div>
                  </div>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      Best friends for 6 years!
                    </div>
                  </div>
                </h1>
                <p>
                  We like to go camping and out on other day trip adventures. We
                  hope to have some property where we can roam free soon!
                </p>
                <div className={styles.btnRow}>
                  <button className={styles.exploreButton}>
                    Learn More
                    <div className={styles.arrowIcon}>
                      <svg
                        version='1.1'
                        id='Capa_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        width='25px'
                        height='25px'
                        viewBox='0 0 330 530'
                        xmlSpace='preserve'
                      >
                        <g>
                          <path
                            d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.heroImages}>
              <div
                className={styles.heroImagesInner}
                ref={(el) => (images = el)}
              >
                <div className={styles.heroImage} id={styles.img1}>
                  <img src={home} alt='eve' className={styles.img} />
                </div>
                <div className={styles.heroImage} id={styles.dog}>
                  <img src={money} alt='dog' className={styles.img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
