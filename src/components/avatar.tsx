import Img from 'gatsby-image';
import React from 'react';
import { useIcon } from 'src/hooks';

import styled from '@emotion/styled';

const Avatar: React.FCX = ({ className }) => {
  const icon = useIcon();
  return <Img fluid={icon} className={className} />;
};

export const StyledAvatar = styled(Avatar)`
  position: absolute !important;
  top: 10rem;
  left: 20rem;
  width: 30rem;
  height: 30rem;
  border-radius: 15rem;

  img,
  picture {
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledAvatar;
