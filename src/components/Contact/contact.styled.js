const { default: styled } = require('@emotion/styled');

export const ContactLi = styled.li``;

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(130px, 1fr) minmax(130px, 1fr) minmax(
      100px,
      0.5fr
    );
`;

export const ContactContent = styled.p``;

export const ContactGroupButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
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
