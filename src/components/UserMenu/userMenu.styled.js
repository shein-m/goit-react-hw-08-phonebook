import styled from '@emotion/styled';

export const UserMenuDiv = styled.div``;

export const UserMenuEmail = styled.p`
  display: inline-block;
`;

export const UserMenuButton = styled.button`
  padding: 10px 20px;
  outline: none;
  border: 2px solid #4d5ae5;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 30px;

  &:focus {
    border-color: #404bbf;
  }
`;
