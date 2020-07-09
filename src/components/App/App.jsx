import React from 'react';
import NavBar from '../nav/NavBar';
import Blank from '../InfoSectionTest/Blank';
import { sectionsData } from '../../../data/data';
import InfoSectionList from '../InfoSection/InfoSectionList';
import AboutUs from '../about/About';

export default function App() {
  return (
    <>
      <NavBar />
      <Blank />
      {/* <AboutUs /> */}
      <InfoSectionList sections={sectionsData} />
    </>
  );
}
