import styled from '@emotion/styled';

export const FilterContactsInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 3px;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border: 1px solid #4d5ae5;
  }
`;
