import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  
  state = {
    name: '',
    number: '',
  };

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value})
  };
  
handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Phone number"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
    
  }
}
