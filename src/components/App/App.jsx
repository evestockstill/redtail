import React from 'react';
import NavBar from '../nav/NavBar';
import { sectionsData } from '../../../data/data';
import InfoSectionList from '../InfoSection/InfoSectionList';
import AboutUs from '../about/About';
import Calendar from '../Calendar/Calendar';
import Footer from '../footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add (fab, faPhone)
import {
  faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <>
      <NavBar />
      <AboutUs />
      <InfoSectionList sections={sectionsData} />
      {/* <Calendar /> */}
      <Footer />
    </>
  );
}
