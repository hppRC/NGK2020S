import React from 'react';

import styled from '@emotion/styled';

const Image: React.FCX<{ src: string }> = ({ src, className }) => {
  return <img className={className} src={src} alt='slide image' />;
};

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledImage;
