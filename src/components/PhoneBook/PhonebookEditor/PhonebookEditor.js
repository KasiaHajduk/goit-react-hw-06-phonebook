import './PhonebookEditor.css';

import React from 'react';
import { addContact } from 'redux/reducer';
import { useDispatch } from 'react-redux';


export default function PhonebookEditor() {

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const pbForm = event.target;
        const name = event.target.name;
        const number = event.target.number;
        dispatch(
            addContact({
                name: name.value,
                number: Number(number.value),
            })
        );
        pbForm.reset();
    };

    return (
        <form className="pb__form" onSubmit={handleSubmit}>
            <label className='pb__label'> Name
                <input
                    className="pb__input"
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
};