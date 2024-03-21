import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
    
    const { id, name, number } = contact;
    
  return (
      <li className={css.contactItem}>
          <div className={css.contactItemTextContainer}>
              <p className={css.contactItemText}><FaUser />{name }</p>
              <p className={css.contactItemText}><FaPhone />{number}</p>
         </div>
          <button onClick={() => onDelete(id)}>Delete</button>
     
</li>
     
  )
}

export default Contact