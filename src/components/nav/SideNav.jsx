import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1000;
  @media (max-width: 980px) {
    padding-top: 7rem;
  }

  a {
    padding-right: 1.3rem;
    padding-top: 5.5rem;
    font-size: 1.7rem;
    color: #4c5425;
    transition: all 1s ease;
    cursor: pointer;
    &:hover {
      color: #f01827;
    }
  }

  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background: #ffff;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    height: 100vh;
    width: 26.5rem;
    transition: all 0.4s cubic-bezier(0.24, 0.23, 0.99, 0.97);
    a {
      font-size: 3rem;
      padding: 2rem;
     
    }
    @media(max-width: 700px) {
      a{
        padding: 1rem;
        font-size: 2rem;
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const SideNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link activeClass="active" to="AboutUs" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
      <Link activeClass="active" to="PreForeclosure" spy={true} smooth={true} offset={0} duration={500}>Pre-Foreclosure</Link>
      <Link activeClass="active" to="Probate" spy={true} smooth={true} offset={0} duration={500}>Probate</Link>
      <Link activeClass="active" to="Tlc" spy={true} smooth={true} offset={0} duration={500}>TLC Homes</Link>
      <Link activeClass="active" to="Refi" spy={true} smooth={true} offset={0} duration={500}>Refinancing</Link>
      <Link activeClass="active" to="Private" spy={true} smooth={true} offset={0} duration={500}>Private Money</Link>
      <Link activeClass="active" to="calendar-container" spy={true} smooth={true} offset={0} duration={500}>Contact Us</Link>
    </Ul>
  );
};
export default SideNav;
