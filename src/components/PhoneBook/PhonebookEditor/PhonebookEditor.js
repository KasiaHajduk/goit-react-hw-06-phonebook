//import { eventWrapper } from '@testing-library/user-event/dist/utils';
//import { Component } from 'react';
import React, { useState } from 'react';
//import { useState } from 'react/cjs/react.production.min';
import './PhonebookEditor.css';


export default function PhonebookEditor({ onSubmit}) {
    const [nameS, setName] = useState('');
    const [numberS, setNumber] = useState('');

    //odpowiada za aktualizację stanu
    // Dla wszystkich inputów tworzymy jeden procesor
    // Inputy będziemy rozróżniać przy pomocy atrybutu name   
    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "name") { setName(value); }
        else if (name === "number") { setNumber(value); }
    };

    //wywoływny jest przy wysyłaniu formularza
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(nameS, numberS);
        setName('');
        setNumber('');
    };

    return (
        <form className="pb__form" onSubmit={handleSubmit}>
            <label className='pb__label'> Name
                <input
                    className="pb__input"
                    value={nameS}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>

            <label className="pb__label"> Number
                <input
                    className="pb__input"
                    value={numberS}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className="pb__add">
                Add contact
            </button>
        </form>
    );
}
