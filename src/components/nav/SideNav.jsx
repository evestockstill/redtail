import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    padding: 2rem;
  }
  @media (max-width: 800px) {
    /* display: none; */
    flex-flow: column nowrap;
    background: #f01827;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    height: 100vh;
    width: 36rem;
    padding-top: 3rem;
    transition: transform 0.2s ease-in-out;
    li {
      color: white;
      font-size: 3rem;
      padding: 2rem 1rem
    }
  }
`;

// eslint-disable-next-line react/prop-types
const SideNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About Us</li>
      <li>Pre-Foreclosure</li>
      <li>Probate</li>
      <li>Ugly Houses</li>
      <li>Private Money</li>
      <li>Contact Us</li>
    </Ul>
  );
};
export default SideNav;
