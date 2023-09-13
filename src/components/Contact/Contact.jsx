import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactButton, ContactLi } from './contact.styled';
import { deleteContact } from 'redux/contacts/operations';

export default function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <ContactLi>
        {name}: {phone}
        <ContactButton
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove
        </ContactButton>
      </ContactLi>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
