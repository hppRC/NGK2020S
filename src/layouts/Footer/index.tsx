import React from 'react';

import styled from '@emotion/styled';

const Footer: React.FCX = ({ className }) => (
  <footer className={className}>
    Copyright © 2019 <a href='https://github.com/hppRC'>hppRC</a>
  </footer>
);

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;

  position: fixed;
  bottom: 0;
  left: 0;

  color: #ffffff;

  z-index: 1000;

  a {
    text-decoration: none;
    color: #fff;
    padding: 0 0.5rem;
  }
`;

export default StyledFooter;
