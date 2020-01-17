import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => {
  useEffect(() => {
    navigate('/slides/');
  });

  return <main className={className}></main>;
};

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default (props: any) => (
  <>
    <SEO title='Top' pathname={props.path} />
    <StyledIndex />
  </>
);
