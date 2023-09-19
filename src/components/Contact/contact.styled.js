const { default: styled } = require('@emotion/styled');

export const ContactLi = styled.li``;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactContent = styled.p``;

export const ContactGroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0px;

  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    border-color: #111111;
  }
`;
