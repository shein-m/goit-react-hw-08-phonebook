import styled from '@emotion/styled';

export const AuthNavigationNav = styled.nav`
  display: flex;
  gap: 30px;

  & > a {
    text-decoration: none;
    color: black;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      color: #4d5ae5;
    }
  }
`;
