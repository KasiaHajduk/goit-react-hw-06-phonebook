import './PhonebookList.css';

export default function PhonebookElement({ id, name, number, onDeleteContact }) {
    return (
        <li key={id} className='pblist__item'>
            <p className='pblist__text'> * {name} &nbsp;&nbsp;&nbsp;&nbsp; {number}  </p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    );
};
