import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import styles from './About.css';
import Media from 'react-media';
import bishop2 from '../../assets/bishop2.png';
import bishop from '../../assets/bishop.png';

const AboutUs = () => {
  let aboutUs = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  let content = useRef(null);

  useEffect(() => {
    const mainImage = images.firstElementChild;

    const headlineFirst = content.children[0].children[0];
    const headLineSecond = headlineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.current;
   
    TweenMax.to(aboutUs, 0, { css: { visibility: 'visible' } });
    tl.from(mainImage, 1.2, { x: -1680, ease: Power3.easeOut }, 0.4)
      .from(
        mainImage.firstElementChild,
        2,
        { scale: 1.9, ease: Power3.easeOut },
        0.2
      );
    tl.staggerFrom(
      [headlineFirst.children, headLineSecond.children, headLineThird.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.5 },
      0.10,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4);
  }, [tl]);
  return (
    <section className={styles.heroContainer}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  earum accusamus porro nesciunt. Recusandae, mollitia, nostrum
                  iusto illum deleniti ratione rem totam est architecto
                  laudantium veritatis nihil aut! Nesciunt unde quos commodi
                  obcaecati saepe reprehenderit animi sed, repellendus debitis
                  fugiat id veniam, incidunt et, quia numquam voluptatem
                  eligendi. Quaerat natus nostrum, amet quae non dolores earum,
                </p>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div
                className={styles.heroImagesInner}
                ref={(el) => (images = el)}
              >
                <div className={styles.heroImage} id={styles.welcomeImg}>
                  <Media
                    query='(min-width: 600px)'
                    render={() => (
                      <img src={bishop2} alt='welcome' className={styles.img} />
                    )}
                  />
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
