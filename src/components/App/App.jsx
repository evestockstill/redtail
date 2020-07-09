import React from 'react';
import NavBar from '../nav/NavBar';
import Blank from '../InfoSectionTest/Blank';
import { sectionsData } from '../../../data/data';
import InfoSectionList from '../InfoSection/InfoSectionList';
import Calendar from '../Calendar/Calendar';

export default function App() {
  return (
    <>
      <NavBar />
      <Blank />
      <InfoSectionList sections={sectionsData} />
      <Calendar />
    </>
  );
}
