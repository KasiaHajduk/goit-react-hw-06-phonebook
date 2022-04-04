import './PhonebookList.css';
import PhonebookElement from './PhonebookElement';

export default function PhonebookList({ contacts, onDeleteContact }) {
    return (
        <ul className='pblist'>
            {contacts.map(({ id, name, number }) => (
                <PhonebookElement
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    );
}
