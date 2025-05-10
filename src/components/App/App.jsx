import { useEffect, useMemo, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SerchBox from "../SearchBox/SearchBox";
import { useDebounce } from "use-debounce";
import { Formik } from "formik";



export default function App() {

  const innitContactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const innitState = () => {
    const contactsList = localStorage.getItem("contactsList");
    return contactsList ? JSON.parse(contactsList) : innitContactsList;
  };

  const [contactsList, setContactsList] = useState(innitState); 

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contactsList))
  }, [contactsList]);

  const addNewContact = (newContact) => { 
    setContactsList((prevContacts) => {
      return [...prevContacts, newContact];
    })
  };

  const deleteContact = (contactId) => {
    setContactsList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
   };
    
  const [inputValue, setinputValue] = useState('');
  const [debouncedInputValue] = useDebounce(inputValue, 1000);
   
    const visibleContacts = useMemo(() => {
    return contactsList.filter((el) =>el.name.toLowerCase().includes(inputValue.toLowerCase()))
  }, [inputValue, contactsList])

  return (
    <>
      <ContactForm onSubmit={addNewContact} />
      <SerchBox inputValue={debouncedInputValue} onChange={setinputValue} />
      <ContactList contactlist={visibleContacts} onDelete={deleteContact} />
    </>
  )
};
