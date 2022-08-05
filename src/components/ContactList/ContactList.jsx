import { ContactList } from './ContactList.styled.js';
import PropTypes from 'prop-types';
import ContactListItem from '../Contactitem/ContactItem';

export const ListContact = ({ contact, onContactDelete }) => (
  <ContactList>
    {contact.map(({ name, number, id }) => (
      <ContactListItem
        key={id}
        contactName={name}
        contactNumber={number}
        del={() => onContactDelete(id)}
      />
    ))}
  </ContactList>
);

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func,
};
