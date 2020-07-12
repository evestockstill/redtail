import React from 'react';
import styled from 'styled-components';
import styles from './NavBar.css';
import Media from 'react-media';
import smLogo from '../../assets/logoredtailcopycopy.png';
import midLogo from '../../assets/logoredtailMid.png';
import Hamburger from './Hamburger';

const Nav = styled.nav`
  padding: 0.5rem;
  width: 100%;
  height: 13.1rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Muli', sans-serif;
  font-weight: 600;
  .logo {
    padding-top: .7rem;
    padding-left: .5rem;
  }
`;
const NavBar = () => {
  return (
    <>
      <Nav>
        <div className={styles.logo_container}>
          <div className='logo'>
            <Media
              query='(min-width: 600px)'
              render={() => <img src={midLogo} />}
            />
            <Media
              query='(max-width: 599px)'
              render={() => <img src={smLogo} />}
            />
          </div>
        </div>
        <Hamburger />
      </Nav>
    </>
  );
};
export default NavBar;
