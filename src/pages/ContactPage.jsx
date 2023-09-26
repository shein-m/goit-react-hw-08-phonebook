import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Section from 'components/Section/Section';
import {
  errorContacts,
  isLoadingContacts,
} from 'redux/contacts/contacts-selectors';
import ContactList from 'components/ContactList/ContactList';

const ContactPage = () => {
  const isLoading = useSelector(isLoadingContacts);
  const isError = useSelector(errorContacts);
  return (
    <>
      <ContactForm />
      <Section title="Contacts" id="contacts">
        <FilterContacts title="Find contacts by name" />
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Something wrong, Error</h2>}
        <ContactList />
      </Section>
    </>
  );
};

export default ContactPage;
