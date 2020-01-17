import Img from 'gatsby-image';
import React from 'react';
import { useGraphQLSampleImage } from 'src/hooks';

import styled from '@emotion/styled';

const GraphQLSample: React.FCX = ({ className }) => {
  const sample = useGraphQLSampleImage();
  return <Img fluid={sample} className={className} />;
};

export const StyledGraphQLSample = styled(GraphQLSample)`
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

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

export default StyledGraphQLSample;
