import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
