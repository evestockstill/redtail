import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import smLogo from '../../assets/logoSm.png';
import logo from '../../assets/logo.png';
import Hamburger from './Hamburger';

const Nav = styled.nav`
  padding: 0.7rem;
  width: 100%;
  height: 10.6rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Muli', sans-serif;
  font-weight: 600;
  .logo {
    padding-top: 0.9rem;
    padding-left: 0.5rem;
  }
`;
const NavBar = () => {
  return (
    <>
    <section id='nav'>
      <Nav>
        <div className='logo'>
          <Media
            query='(min-width: 600px)'
            render={() => <img src={logo} />}
          />
          <Media
            query='(max-width: 599px)'
            render={() => <img src={smLogo} />}
          />
        </div>
        <Hamburger />
      </Nav>
      </section>
    </>
  );
};
export default NavBar;
