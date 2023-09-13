import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { ContactListUl } from './contactList.styled';
import { getFilter } from '../../redux/filter/selectors';
import { contactOperation, contactSelectors } from 'redux/contacts';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(contactOperation.fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts.length > 0 && (
        <ContactListUl>
          {filteredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactListUl>
      )}
    </>
  );
}
