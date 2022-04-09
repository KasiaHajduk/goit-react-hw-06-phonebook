import PhonebookElement from "./PhonebookElement";
import { useSelector } from "react-redux";

function getVisibleContacts (contacts, filter) {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default function PhonebookList() {
  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts, state.filter)
  );

  return (
    <ul className='pblist'>
      {contacts !== undefined &&
        contacts.map(({ id, name, number }) => (
          <PhonebookElement key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};


