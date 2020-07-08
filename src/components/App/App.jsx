import React from 'react';
import NavBar from '../nav/NavBar';
import InfoSection from '../InfoSection/InfoSection';
import TlcHomes from '../InfoSectionTest/TlcHomes';
import Probate from '../InfoSectionTest/Probate';
import PreForeclosure from '../InfoSectionTest/PreForeclosure';
import Blank from '../InfoSectionTest/Blank';
import PrivateMoney from '../InfoSectionTest/PrivateMoney';
import Refinance from '../InfoSectionTest/Refinance';

export default function App() {
  return (
    <>
      <NavBar />
      <Blank />
      <PreForeclosure />
      <Probate />
      <TlcHomes/>
      <Refinance />
      <PrivateMoney />
    </>
  );
}
