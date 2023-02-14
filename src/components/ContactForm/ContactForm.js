import PropTypes from 'prop-types';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.props.onData(this.state);
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    console.log(name);

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.nameInputId}>
          Number
          <input
            id={this.nameInputId}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onData: PropTypes.func.isRequired,
};
