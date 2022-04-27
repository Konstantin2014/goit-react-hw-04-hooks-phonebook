import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {
  TitleContactFotm,
  TitleContact,
} from './ContactForm/ContactForm.styled';
import { Filter } from 'components/Filter/Filter';
import { Notification } from './Notification/Notification';
import { ContactList } from '../components/ContactList/ContactList';
import { nanoid } from 'nanoid';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


export const App = () => {
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? contactList});
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
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) 
    {alert(`${name} is already contacts.`);
    }  else {setContacts(prevState => [contact, ...prevState]);
    }
  };

  const getFilteredContacts = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
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
     {contacts.length > 1 && ( <Filter filter={filter} onFilterHandleChange={onFilterHandleChange} />)}
      {contacts.length ?(<ContactList contact={visibleContact} onContactDelete={contactDelete} />):(   <Notification message="List is empty" />)}
    </div>
  );
};
