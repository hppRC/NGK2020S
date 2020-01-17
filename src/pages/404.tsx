import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const NotFound: React.FCX = ({ className }) => {
  useEffect(() => {
    navigate('/slides/');
  });

  return (
    <main className={className}>
      <h1>Not Found</h1>
    </main>
  );
};

const StyledNotFound = styled(NotFound)`
  ${baseStyle};
`;

export default (props: any) => (
  <>
    <SEO title='Not Found' pathname={props.path} />
    <StyledNotFound />
  </>
);
