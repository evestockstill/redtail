import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './InfoSection';

const InfoSectionList = ({ sections }) => {
  const sectionElements = sections.map((sectionObj, i) => (
    <section key={i}> 
      <InfoSection {...sectionObj} />
    </section>
  ));


  return (
    <>
      {sectionElements}
    </>
  );
};

InfoSectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    secId: PropTypes.string.isRequired,
    pId: PropTypes.string
  }))
};

export default InfoSectionList;
