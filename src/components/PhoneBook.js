//import { Component } from 'react';
import { useState, useEffect } from 'react';

import {nanoid} from 'nanoid';
import './Phonebook.css';
import PhonebookList from './PhoneBook/PhonebookList/PhonebookList';
import PhonebookEditor from './PhoneBook/PhonebookEditor/PhonebookEditor';
import PhonebookFilter from './PhoneBook/PhonebookFilter/PhonebookFilter';


export default function PhoneBook () {
    const [contacts, setContacts] = useState([
        { id: 'id-0', name: 'kasia', number: '459-12-56' },
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);
        if (parsedContacts) {
            setContacts(parsedContacts );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts] ) ;

    const addContact = (name, number) => {
        const contact = {id: nanoid(), name, number};
        const anyContact = contacts.some(contact => contact.name.toLowerCase() === (name.toLowerCase()));
        if (anyContact) {
            alert(`${name} is already in contacts`);    
        }
        else {
            setContacts([contact, ...contacts]);
        }
    }

    const deleteContact = (contactId) => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    //ustawienie wartości filtra
    const changeFilter = (event) => {
        setFilter(event.currentTarget.value);
    };

    const getVisibleContacts = () => {
        //const {contacts, filter} = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const visibleContacts = getVisibleContacts(); 
       
    return (
        <div>
            <h1>Phonebook Kasi</h1>
            <PhonebookEditor onSubmit={addContact}/> 

            <h2>Contacts</h2>
            <PhonebookFilter value={filter} onChange={changeFilter} />
            <PhonebookList 
                contacts={visibleContacts} 
                onDeleteContact={deleteContact}/>
        </div>
    );
}



// export default class PhoneBook extends Component{
//     state = {
//         contacts: [
//             {id: 'id-0', name: 'kasia', number: '459-12-56'},
//             {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//           ],
//           filter: '',
//     };

//     componentDidMount () {
//         const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse(contacts);
//         if (parsedContacts) {
//             this.setState({contacts: parsedContacts});
//         }
//     }

//     componentDidUpdate (prevProps, prevState) {
//         const nextContacts = this.state.contacts;
//         const prevContacts = prevState.contacts;
//         if (nextContacts !== prevContacts) {
//             localStorage.setItem('contacts', JSON.stringify(nextContacts));
//         }
//     }


//     addContact = ({name, number}) => {
//         const contact = {id: nanoid(), name, number};
//         const {contacts} = this.state;
//         const anyContact = contacts.some(contact => contact.name.toLowerCase() === (name.toLowerCase()));
   
//         if (anyContact) {
//             alert(`${name} is already in contacts`);    
//         }
//         else {
//             this.setState(({ contacts }) => ({ contacts: [contact, ...contacts]}));
//         }
//     }

//     deleteContact = contactId => {
//         this.setState(({contacts}) => ({
//             contacts: contacts.filter(contact => contact.id !== contactId), 
//         }));
//     };

//     //ustawienie wartości filtra
//     changeFilter = e => {
//         this.setState({ filter: e.currentTarget.value});
//     };

//     getVisibleContacts = () => {
//         const {contacts, filter} = this.state;
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact => 
//             contact.name.toLowerCase().includes(normalizedFilter),
//         );
//     };


//     render () {
//         const {filter} = this.state;
//         const visibleContacts = this.getVisibleContacts(); 
       
//         return (
//         <div>
//             <h1>Phonebook Kasi</h1>
//             <PhonebookEditor onSubmit={this.addContact}/> 

//             <h2>Contacts</h2>
//             <PhonebookFilter value={filter} onChange={this.changeFilter} />
//             <PhonebookList 
//                 contacts={visibleContacts} 
//                 onDeleteContact={this.deleteContact}/>
//         </div>
//         );
//     }
// }
