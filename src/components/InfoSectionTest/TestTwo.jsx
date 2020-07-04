/* eslint-disable react/prop-types */
import React from 'react';
import probate from '../../assets/probate1.jpg';
import styles from './TestTwo.css';

const TestTwo = ({ title, img, text, link }) => {
  return (
    //we may need to change the a tag based on how scrolling will work with greensock
    <>
      <div className={styles.main_container}>
        <div className={styles.info_container}>
          <div className={styles.img_container}>
            <h2>
              <span className={styles.span}>Probate</span>
            </h2>
            <img src={probate} className={styles.mainImg} />
            

            <div className={styles.para}>
              <p>
                <span className={styles.pspan}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  dolore expedita corrupti qui dolorem, consequuntur porro
                  nostrum at? Omnis nam minus aliquid exercitationem aspernatur
                  a, numquam porro laudantium blanditiis inventore accusamus
                  mollitia voluptate pariatur voluptatem ex nemo ad facere ut
                
                  <a>{link}</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestTwo;
