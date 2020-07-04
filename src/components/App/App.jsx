import React from 'react';
import NavBar from '../nav/NavBar';
import InfoSection from '../InfoSection/InfoSection';
import InfoSectionTest from '../InfoSectionTest/InfoSectionTest';
import TestTwo from '../InfoSectionTest/TestTwo';
import Blank from '../InfoSectionTest/Blank';

export default function App() {
  return (
    <>
      <NavBar />
      <Blank />
      <InfoSectionTest />
      <TestTwo />
      <InfoSectionTest />
      <TestTwo />
   
    </>
  );
}
