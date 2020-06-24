import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 950px) {
    padding-top: 3rem;
  }

  li {
    padding-right: 2.5rem;
    padding-top: 2rem;
    font-size: 1.7rem;
    color: #4c5425;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    /* display: none; */
    flex-flow: column nowrap;
    background: #f01827;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    height: 100vh;
    width: 33.5rem;
    /* padding-top: 5rem; */
    transition: all 0.4s cubic-bezier(0.24, 0.23, 0.99, 0.97);
    li {
      color: white;
      font-size: 3rem;
      padding: 3rem 1.5rem;
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
      <li>Ugly Houses</li>
      <li>Private Money</li>
      <li>Contact Us</li>
    </Ul>
  );
};
export default SideNav;
