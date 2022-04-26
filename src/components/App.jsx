import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {
  TitleContactFotm,
  TitleContact,
} from './ContactForm/ContactForm.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { nanoid } from 'nanoid';

const contList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactDefault = JSON.parse(localStorage.getItem('contList'));

export const App = () => {
  const [contacts, setContacts] = useState(() => contactDefault ?? contList);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.map(cont => {
      if (cont.name === contact.name) {
        return alert(`${contact.name} is already in contacts`);
      }
      return cont;
    });
    setContacts(prevState => [contact, ...prevState]);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactDelete = deleteId => {
    setContacts(contacts.filter(({ id }) => id !== deleteId));
  };

  const onFilterHandleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContact = getFilteredContacts();

  return (
    <div>
      <TitleContactFotm>Phonebook</TitleContactFotm>
      <ContactForm addContact={addContact} />
      <TitleContact>Contacts</TitleContact>
      <Filter filter={filter} onFilterHandleChange={onFilterHandleChange} />
      <ContactList contact={visibleContact} onContactDelete={contactDelete} />
    </div>
  );
};
