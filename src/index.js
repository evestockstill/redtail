import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import './index.css';
import NavBar from './components/nav/NavBar';
import InfoSection from './components/InfoSection/InfoSection';
import InfoSectionList from './components/InfoSection/InfoSectionList';
import InfoSectionTest from './components/InfoSectionTest/InfoSectionTest';
render(
  // <App />,

  <InfoSectionTest />,
  document.getElementById('root')
);
