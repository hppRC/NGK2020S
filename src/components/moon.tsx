import React from 'react';

import styled from '@emotion/styled';

const Moon: React.FCX = ({ className }) => {
  return <p className={className}>🌝</p>;
};

export const StyledMoon = styled(Moon)`
  position: absolute !important;
  top: 8rem;
  right: 20rem;
  font-size: 30rem;

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledMoon;
