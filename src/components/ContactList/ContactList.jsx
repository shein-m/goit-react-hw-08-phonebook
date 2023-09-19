import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { ContactListUl } from './contactList.styled';
import { getFilter } from '../../redux/filter/selectors';
import { contactOperation, contactSelectors } from 'redux/contacts';
import ContactModal from 'components/ContactModal/ContactModal';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getContacts);
  const filter = useSelector(getFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  useEffect(() => {
    dispatch(contactOperation.fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleUpdate = id => {
    setIsModalOpen(true);
    setModalId(id);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {contacts.length > 0 && (
        <ContactListUl>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              handleUpdate={handleUpdate}
            />
          ))}
        </ContactListUl>
      )}
      {isModalOpen && (
        <ContactModal modalId={modalId} handleModal={handleModal} />
      )}
    </>
  );
}
