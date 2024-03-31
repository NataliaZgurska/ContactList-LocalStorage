import { FaUser } from 'react-icons/fa6';
import { IoWomanOutline } from 'react-icons/io5';
import { IoManOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const { id, name, number, favColor, description, sex } = contact;

  return (
    <li className={css.contactItem}>
      <div className={css.contactItemTextContainer}>
        <p style={{ color: favColor }} className={css.contactItemText}>
          {sex === 'women' ? (
            <IoWomanOutline size="30" />
          ) : (
            <IoManOutline size="30" />
          )}
          {name}
        </p>

        <p className={css.contactItemText}>
          <FaPhone />
          {number}
        </p>
        <p className={css.contactItemText}>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
//  <p>{ description===femail ? <TbGenderDemigirl /> : <TbGenderDemiboy /> }</p>
