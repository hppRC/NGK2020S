import React from 'react';

import styled from '@emotion/styled';

const SlideLayout: React.FCX = ({ className, children }) => {
  return <main className={className}>{children}</main>;
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
    font-size: 6rem;
  }

  ul {
    li {
      padding: 1rem;
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
