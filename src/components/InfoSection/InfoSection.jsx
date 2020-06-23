import React from 'react';
import PropTypes from 'prop-types'

const InfoSection = ({ title, img, text, link }) => {

  return (
    //we may need to change the a tag based on how scrolling will work with greensock
    <section>
      <img src={img} />
      <h2>{title}</h2>
      <p>
        {text}
      <a>{link}</a> 
      </p>
    </section>
  );
}

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default InfoSection
