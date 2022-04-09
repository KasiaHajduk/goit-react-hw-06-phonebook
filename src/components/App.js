//import { Component } from 'react';
//import { useState, useEffect } from 'react';

import './App.css';
import PhonebookList from './PhoneBook/PhonebookList/PhonebookList';

import PhonebookEditor from './PhoneBook/PhonebookEditor/PhonebookEditor';
import PhonebookFilter from './PhoneBook/PhonebookFilter/PhonebookFilter';


function App () {
    return (
        <div>
            <h1>Phonebook</h1>
            <PhonebookEditor /> 
            <h2>Contacts</h2>
            <PhonebookFilter />
            <PhonebookList />
            
        </div>
    );
}

export default App;