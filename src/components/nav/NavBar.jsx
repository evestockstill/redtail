import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import logo from '../../assets/logoredtail.png';
import smLogo from '../../assets/logoredtailcopy.png';
import midLogo from '../../assets/logoredtailMid.png';
import Hamburger from './Hamburger';

const Nav = styled.nav`
  padding: 1rem;
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f01827;
  font-family: 'Muli', sans-serif;
  font-weight: 600;
  .logo {
    padding: 1rem;
  }
`;
const NavBar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
          <Media
            query='(min-width: 1100px)'
            render={() => <img src={logo} />}
          />
          <Media
            query='(min-width: 600px) and (max-width: 1099px)'
            render={() => <img src={midLogo} />}
          />

          <Media
            query='(max-width: 599px)'
            render={() => <img src={smLogo} />}
          />
        </div>
        <Hamburger />
      </Nav>
    </>
  );
};
export default NavBar;
