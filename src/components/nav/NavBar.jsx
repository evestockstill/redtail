import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import logo from '../../assets/logoredtail.png';
import smLogo from '../../assets/logoredtailcopy.png';
import midLogo from '../../assets/logoredtailMid.png';
import logosvg from '../../assets/logo3.svg';
import bird from '../../assets/bird.svg';
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
    height: 5rem;
    width: 6rem;
  }
  #bird{
    height: 500px;
    width: 600px;
    fill: #f01827;
    path d{
      fill: #f01827;
    }
  }
`;
const NavBar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
          {/* <svg src={bird} /> */}
          <svg id='bird' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="110.000000pt" height="135.000000pt" viewBox="0 0 110.000000 135.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d1="M208 1201 c-95 -87 -148 -215 -148 -357 0 -122 28 -202 93 -269 54
-55 104 -78 206 -92 l43 -6 -36 47 c-83 109 -128 226 -129 330 0 78 14 127 57
199 l35 58 -29 -21 c-43 -30 -80 -78 -109 -140 l-26 -55 -3 45 c-7 85 27 191
85 268 38 51 21 48 -39 -7z"/>
              <path d="M980 1193 c21 -32 45 -80 54 -108 21 -59 33 -175 19 -175 -5 0 -20
24 -33 53 -23 50 -110 147 -132 147 -7 0 -2 -10 10 -22 11 -13 33 -48 49 -78
25 -50 28 -65 27 -155 0 -121 -20 -179 -101 -298 l-54 -80 43 6 c83 12 145 37
189 76 l44 39 3 281 c2 175 -1 281 -7 281 -5 0 -11 -5 -13 -10 -2 -6 -29 14
-61 45 -33 30 -63 55 -67 55 -5 0 9 -26 30 -57z"/>
              <path d="M568 658 c-9 -7 -19 -26 -22 -43 -27 -117 -29 -119 -97 -84 -23 11
-43 18 -46 15 -3 -2 14 -25 37 -50 l42 -45 -43 -8 c-24 -4 -46 -7 -49 -6 -3 0
-27 4 -54 8 -47 6 -49 6 -35 -11 27 -33 115 -82 186 -103 39 -12 82 -30 94
-40 23 -18 25 -18 49 -1 14 10 57 27 95 39 68 20 144 61 186 100 20 19 19 19
-63 14 -108 -5 -119 2 -73 51 19 21 35 41 35 46 0 5 -20 0 -45 -11 -25 -11
-50 -17 -55 -14 -16 10 -12 72 5 79 25 9 17 35 -17 56 -37 23 -106 26 -130 8z"/>
              <path d="M499 268 c-7 -13 -25 -39 -42 -58 l-30 -34 40 -36 c22 -19 64 -48 92
-63 l52 -29 47 28 c26 15 66 42 89 61 l43 34 -40 50 c-22 28 -40 55 -40 60 0
18 -26 9 -60 -21 -19 -16 -39 -29 -44 -30 -4 0 -24 14 -43 30 -40 36 -49 37
-64 8z"/>
            </g>
          </svg>
          {/* <Media
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
          /> */}
        </div>
        <Hamburger />
      </Nav>
    </>
  );
};
export default NavBar;
