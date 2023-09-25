import styled from '@emotion/styled';

const transition = `
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AuthFormWrapper = styled.form``;

export const AuthFormLabel = styled.label`
  display: block;
  margin-bottom: 5px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.48px;
`;

export const AuthFormDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &.last-wrapper {
    margin-bottom: 20px;
  }
`;

export const AuthFormIconWrapper = styled.span`
  position: absolute;
  left: 15px;

  & > svg {
    transition-property: color;
    ${transition}
  }
`;

export const AuthFormInput = styled.input`
  width: 360px;
  height: 40px;
  padding-left: 40px;

  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;

  font-size: 16px;

  transition-property: border-color;
  ${transition}

  &:focus {
    border: 1px solid #4d5ae5;
  }

  &:focus + span > svg {
    color: #4d5ae5;
  }
`;

export const AuthFormButton = styled.button`
  display: block;
  width: 360px;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  color: #fff;
  cursor: pointer;

  border-radius: 4px;
  background: var(--IRIS, #4d5ae5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  transition-property: opacity;
  ${transition}

  &:focus {
    outline: none;
    background-color: #404bbf;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
