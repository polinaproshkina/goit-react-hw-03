import { useState } from "react";
import ContactList from "./ContactList"
import ContactForm from "./ContactForm"
import SerchBox from "./SearchBox"
import { useDebounce } from "use-debounce";

export default function App() {

  const [contactsList, setContactsList] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  );

  const addNewContact = (newContact) => {
    setContactsList((prevContacts) => {
      return [...prevContacts, newContact];
    })
  };
    
  const [inputValue, setinputValue] = useState('');
  const [debouncedInputValue] = useDebounce(inputValue, 1000);

  const visibleContacts = contactsList.filter((el) =>
    el.name.toLowerCase().includes(inputValue.toLowerCase())
);

  return (
    <>
      <ContactForm onSubmit={addNewContact} />
      <SerchBox inputValue={debouncedInputValue} onChange={setinputValue} />
      <ContactList contactlist={visibleContacts} />
    </>
  )
};
