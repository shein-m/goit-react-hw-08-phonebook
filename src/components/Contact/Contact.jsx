import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ContactButton,
  ContactLi,
  ContactWrapper,
  ContactContent,
  ContactGroupButtons,
} from './contact.styled';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { BiTrash, BiEdit } from 'react-icons/bi';

export default function Contact({ name, number, id, handleUpdate }) {
  const dispatch = useDispatch();

  return (
    <>
      <ContactLi>
        <ContactWrapper>
          <ContactContent>{name}</ContactContent>
          <ContactContent>{number}</ContactContent>
          <ContactGroupButtons>
            <ContactButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <BiTrash />
            </ContactButton>
            <ContactButton type="button" onClick={() => handleUpdate(id)}>
              <BiEdit />
            </ContactButton>
          </ContactGroupButtons>
        </ContactWrapper>
      </ContactLi>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
