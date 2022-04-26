import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNamber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNamber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          id={numberInputId}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
