import React from 'react';
import PropTypes from 'prop-types'
import InfoSection from './InfoSection';

const InfoSectionList = ({ sections }) => {
  const sectionElements = sections.map((sectionObj, i) => (
    //we can add the class to each section here
    <section key={i}> 
      <InfoSection {...sectionObj} />
    </section>
  ));


  return (
    <>
      {sectionElements}
    </>
  );
}

InfoSection.propTypes = {
  sections: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
}

export default InfoSectionList;
