const { default: styled } = require('@emotion/styled');

export const ContactFormWrapper = styled.div`
  max-width: 400px;
`;

export const ContactUiForm = styled.form`
  border-radius: 3px;
`;
export const ContactDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
`;

export const ContactInput = styled.input`
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

export const ContactLabel = styled.label`
  display: block;
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: 600;
`;
export const ContactButton = styled.button`
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

  &:hover,
  &:focus {
    border-color: #404bbf;
  }
`;
