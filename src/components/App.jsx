import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import Section from './Section/Section';
import { isLoadingContacts, errorContacts } from 'redux/contacts/selectors';

export default function App() {
  const isLoading = useSelector(isLoadingContacts);
  const isError = useSelector(errorContacts);

  return (
    <>
      <ContactForm />
      <Section title="Contacts">
        <FilterContacts title="Find contacts by name" />
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Something wrong, Error</h2>}
        <ContactList />
      </Section>
    </>
  );
}
