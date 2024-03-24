import { useState } from 'react'
import { nanoid } from 'nanoid'

import initialContacts from './myContacts.json'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((item)=>item.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid(), };
    setContacts((prevContacts) => {
      return [...prevContacts, finalContact];
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
     return prevContacts.filter((contact) => contact.id!==contactId)
     })
  }
  return (
 <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact } />
      <SearchBox value={filter} onFilter={setFilter } />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
</div>

  )
}

export default App
