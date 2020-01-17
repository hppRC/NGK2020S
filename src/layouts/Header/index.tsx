import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

const Header: React.FCX = ({ className }) => (
  <header className={className}>
    <h1>
      <Link to='/'> NGK2020S</Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 1rem;

  h1 {
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }

  nav {
    padding-top: 2rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: #ffffff;
          padding: 2rem;
        }
      }
    }
  }
  z-index: 1000;
`;

export default StyledHeader;
