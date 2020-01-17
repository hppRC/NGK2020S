import React from 'react';

import styled from '@emotion/styled';

const SlideLayout: React.FCX = ({ className, children }) => {
  return <main className={className}>{children}</main>;
};

export const StyledSlideLayout = styled(SlideLayout)`
  color: #ffffff;
  background-color: #09090f;

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledSlideLayout;
