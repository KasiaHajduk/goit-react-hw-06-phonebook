import { createSlice, nanoid } from "@reduxjs/toolkit";

const getContacts = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts === null
    ? undefined
    : JSON.parse(contacts);
};

const initialContacts = {
  contacts: getContacts(),
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  
  reducers: {
    
    addContact: (state, { payload }) => {
      const anyContact = state.contacts.some((contact) => contact.name.toLowerCase() === (payload.name.toLowerCase()));
      if (anyContact) {
        alert(`${payload.name} is already in contacts list`);
      }
      else {
        state.contacts.push({
          id: nanoid(),
          name: payload.name,
          number: payload.number,
        });
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      }
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },

    onFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, onFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
