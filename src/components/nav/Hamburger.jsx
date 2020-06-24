import React, { useState } from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';

const StyledHamburger = styled.div`
  height: 2rem;
  width: 2rem;
  position: fixed;
  top: 2.5rem;
  right: 4rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  z-index: 1000;
  div {
    width: 4rem;
    height: 0.3rem;
    background: ${({ open }) => (open ? '#f01827' : '#4c5425')};
    border-radius: 2px;
    transform-origin: 4.5px;
    transition: all 0.5s ease;

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
