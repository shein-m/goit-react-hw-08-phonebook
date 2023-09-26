import {
  ContactListBarContent,
  ContactListBarLi,
  ContactListBarWrapper,
} from './contactListBar.styled';

export const ContactListBar = ({ title }) => {
  return (
    <ContactListBarLi>
      <ContactListBarWrapper>
        <ContactListBarContent>{title.name}</ContactListBarContent>
        <ContactListBarContent>{title.phone}</ContactListBarContent>
        <ContactListBarContent>{title.actions}</ContactListBarContent>
      </ContactListBarWrapper>
    </ContactListBarLi>
  );
};
