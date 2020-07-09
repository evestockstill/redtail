import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1000;
  @media (max-width: 950px) {
    padding-top: 3rem;
  }

  li {
    padding-right: 1.5rem;
    padding-top: 7rem;
    font-size: 1.7rem;
    color: #4c5425;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    /* display: none; */
    flex-flow: column nowrap;
    background: rgba(228, 180, 65, 0.9);
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    height: 100vh;
    width: 36.5rem;
    /* padding-top: 5rem; */
    transition: all 0.4s cubic-bezier(0.24, 0.23, 0.99, 0.97);
    li {
      color: white;
      font-size: 3rem;
      padding: 3rem;
      /* margin-top: 3rem */
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
      <li>TLC Homes</li>
      <li>Refinancing</li>
      <li>Private Money</li>
      <li>Contact Us</li>
    </Ul>
  );
};
export default SideNav;
