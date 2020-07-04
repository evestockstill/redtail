import React, { useState } from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';

const StyledHamburger = styled.div`
  height: 2.3rem;
  width: 2.3rem;
  position: fixed;
  top: 2rem;
  right: 5rem;
  z-index: 1000;
  display: none;

  @media (max-width: 950px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
  }
  div {
    width: 4rem;
    height: 0.3rem;
    background: ${({ open }) => (open ? '#4c5425' : '#f01827')};
    border-radius: 4px;
    transform-origin: 4.5px;
    transition: all 0.5s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <SideNav open={open} />
    </>
  );
};
export default Hamburger;
