import React from 'react';
import NavBar from '../nav/NavBar';
import { sectionsData } from '../../../data/data';
import InfoSectionList from '../InfoSection/InfoSectionList';
import AboutUs from '../about/About';
import Calendar from '../Calendar/Calendar';
import Footer from '../footer/Footer';


export default function App() {
  return (
    <>
      <NavBar />
      <AboutUs />
      <InfoSectionList sections={sectionsData} />
      <Calendar />
      <Footer />
    </>
  );
}
