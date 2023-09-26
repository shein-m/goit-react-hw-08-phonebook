import styled from '@emotion/styled';

export const ContactListBarLi = styled.li``;

export const ContactListBarWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(130px, 1fr) minmax(130px, 1fr) minmax(
      100px,
      0.5fr
    );
`;

export const ContactListBarContent = styled.h3`
  &:last-child {
    text-align: right;
  }
`;
