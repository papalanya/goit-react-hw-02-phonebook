import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { nanoid } from 'nanoid';


export class App extends Component {
    state = {
        contacts: [],
        name: ''
      }

    formSubmitHandler = ({ name }) => {
        const newContact = {
            id: nanoid(),
            name,
        };

        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    render() {
        const { contacts } = this.state;
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onData={this.formSubmitHandler} />

                <h2>Contacts</h2>
                <ContactList contacts={contacts} />
            </div>
        );
    }
}




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
