/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Blank.css';

const Blank = ({ title, img, text, link }) => {
  return (
    //we may need to change the a tag based on how scrolling will work with greensock
    <>
      <div className={styles.main_container}>
       
      </div>
    </>
  );
};
export default Blank;
