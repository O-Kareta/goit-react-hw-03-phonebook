import PropTypes from 'prop-types';

import css from './ContactsList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.string.isRequired,
};
