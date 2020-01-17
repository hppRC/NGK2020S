import React from 'react';
import { SEO } from 'src/components';

import styled from '@emotion/styled';

const SlideLayout: React.FCX = ({ className, children }) => {
  return (
    <main className={className}>
      <SEO title='slides' pathname={'/slides'} />
      {children}
    </main>
  );
};

export const StyledSlideLayout = styled(SlideLayout)`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    padding: 2rem 4rem 6rem 4rem;
    font-size: 14rem;
  }
  h2 {
    padding: 2rem 4rem 4rem 4rem;
    font-size: 8rem;
  }

  p {
    font-size: 5rem;
  }

  ul {
    padding: 1rem 0;
    li {
      padding: 1rem;
      font-size: 5rem;
    }
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

export default StyledSlideLayout;
