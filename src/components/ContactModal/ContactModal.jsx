import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  ContactButton,
  ContactDiv,
  ContactLabel,
  ContactUiForm,
  ModalContactWindow,
  ModalContactOverlay,
  ModalContactTitle,
  ModalContactIcon,
} from './contactModal.styled';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ handleModal, modalId }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleEscape = event => {
    if (event.code === 'Escape') {
      handleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleModal();
    }
  };

  const handleModalForm = event => {
    event.preventDefault();
    dispatch(updateContact({ id: modalId, name, number }));
    handleModal();
  };

  return createPortal(
    <ModalContactOverlay onClick={handleOverlayClick}>
      <ModalContactWindow>
        <ContactUiForm
          type="submit"
          autoComplete="false"
          onSubmit={handleModalForm}
        >
          <ModalContactIcon>
            <AiOutlineClose size={20} onClick={handleModal} />
          </ModalContactIcon>

          <ModalContactTitle>Edit Contact</ModalContactTitle>
          <ContactDiv>
            <ContactLabel htmlFor="modalName">Name</ContactLabel>
            <input
              id="modalName"
              className="input-field"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </ContactDiv>

          <ContactDiv>
            <ContactLabel htmlFor="modalNumber">Tel</ContactLabel>
            <input
              id="modalNumber"
              className="input-field"
              type="tel"
              name="number"
              pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleChange}
              required
            />
          </ContactDiv>

          <ContactButton type="submit">Send</ContactButton>
        </ContactUiForm>
      </ModalContactWindow>
    </ModalContactOverlay>,
    document.querySelector('#portal-modal')
  );
}
