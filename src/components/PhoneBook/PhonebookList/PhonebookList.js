import PhonebookElement from "./PhonebookElement";

import React from 'react';
import { useSelector } from "react-redux";

export default function PhonebookList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = React.useMemo(() => contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter)), [filter, contacts]);

  return (
    <ul className='pblist'>
      {filteredContacts !== undefined &&
        filteredContacts.map(({ id, name, number }) => (
          <PhonebookElement key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};


