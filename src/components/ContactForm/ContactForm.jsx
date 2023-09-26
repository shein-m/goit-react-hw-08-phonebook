import { useState } from 'react';
import {
  ContactButton,
  ContactDiv,
  ContactFormWrapper,
  ContactInput,
  ContactLabel,
  ContactUiForm,
} from './contactForm.styled';
import Section from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelectors, contactOperation } from 'redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const isContactAlready = name => {
    const checkContacts = contacts.find(el => el.name === name);

    if (checkContacts) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  const handleForm = event => {
    event.preventDefault();

    if (!isContactAlready(name)) {
      dispatch(contactOperation.addContact({ name, number }));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Section id="phonebook">
      <ContactFormWrapper>
        <h2>Phonebook</h2>
        <ContactUiForm type="submit" autoComplete="false" onSubmit={handleForm}>
          <ContactLabel htmlFor="name">Name</ContactLabel>
          <ContactDiv>
            <ContactInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Put contact name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </ContactDiv>

          <ContactLabel htmlFor="number">Tel</ContactLabel>
          <ContactDiv>
            <ContactInput
              type="tel"
              name="number"
              placeholder="Put contact phone"
              pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleChange}
              required
            />
          </ContactDiv>
          <ContactButton type="submit">Add contact</ContactButton>
        </ContactUiForm>
      </ContactFormWrapper>
    </Section>
  );
}
