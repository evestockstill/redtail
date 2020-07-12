import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import styles from './About.css';
import Media from 'react-media';
import bishop from '../../assets/bishop2.png';

const AboutUs = () => {
  let aboutUs = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  let content = useRef(null);

  useEffect(() => {
    // const Image = images.firstElementChild;
    const mainImage = images.firstElementChild;

    const headlineFirst = content.children[0].children[0];
    const headLineSecond = headlineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.children[1];
    const contentBtn = content.children[2];
   
    TweenMax.to(aboutUs, 0, { css: { visibility: 'visible' } });
    // tl.from(mainImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
    //   .from(
    //     mainImage.firstElementChild,
    //     2,
    //     { scale: 1.6, ease: Power3.easeOut },
    //     0.2
    //   )
      tl.from(mainImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        mainImage.firstElementChild,
        2,
        { scale: 2.6, ease: Power3.easeOut },
        0.2
      );
    tl.staggerFrom(
      [headlineFirst.children, headLineSecond.children, headLineThird.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.6 },
      0.10,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
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
                      real estate solutions
                    </div>
                  </div>
                  <div className={styles.heroContentLine}>
                    <div className={styles.heroContentLineInner}>
                      & enterprise
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
                {' '}
                <div className={styles.heroImage} id={styles.welcomeImg}>
                  <Media
                    query='(min-width: 600px)'
                    render={() => (
                      <img src={bishop} alt='welcome' className={styles.img} />
                    )}
                  />
                  {/* <img src={money} alt='welcome' className={styles.img} /> */}
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
