import PropTypes from 'prop-types';
import css from './ContactsFilter.module.css';

export const ContactsFilter = ({ filter, searchContact }) => {
  const onChange = event => {
    const { value } = event.target;
    searchContact(value);
  };
  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search by name"
    />
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
