import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

const ContactForm = ({ onAdd }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const  id = nanoid();

      const formData = {
        id,
        name,
        number
    }

    onAdd(formData)
    event.currentTarget.reset();
  };

  return (
          <div className={css.formAddContainer}>
          <form className={css.formAdd} onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <br />
                <input type="text" name="name" required />
            </label>
          
            <label>
                <span>Number:</span>
                <br />
                <input type="number" name="number" required />
            </label>
                  
              <button className={css.formAddBtn} type="submit">Add contact</button>
          </form>
    </div>
  )
}

export default ContactForm

