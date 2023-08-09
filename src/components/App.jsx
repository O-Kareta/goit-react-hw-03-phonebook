import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

import { generateUniqueId } from './helpers/generateUniqueId';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLS = localStorage.getItem('contacts');
    if (contactsLS) {
      this.setState({ contacts: JSON.parse(contactsLS) } || []);
    }

    if (!contactsLS) {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isNameExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: generateUniqueId(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  searchContact = value => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsFilter filter={filter} searchContact={this.searchContact} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
