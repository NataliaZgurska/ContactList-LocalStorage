import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './ContactForm.module.css'

const FORM_INITIAL_VALUES = {
    name: "",
    number: "",
    favColor: "",
}

const FormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  favColor: Yup.string()
    .required("Favorite color is required!")
    .oneOf(["red", "green", "blue"],
  "Favorite color must be one of following: red, green, blue")
});


const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
	};


  return (
    <div className={css.formAddContainer}>
      <Formik
          initialValues={ FORM_INITIAL_VALUES }
          validationSchema={FormSchema}
          onSubmit={handleSubmit}>
          <Form className={css.formAdd}>
              <label className={css.formLabel}>
                  <span>Name:</span>
                
                  <Field type="text" name="name" />
                  <ErrorMessage className={css.errorMessage} component="p" name='name'/>
              </label>

             <label className={css.formLabel}>
                  <span>Number:</span>
                 
                  <Field type="number" name="number" />
                     <ErrorMessage className={css.errorMessage} component="p" name='number'/>
             </label>
          
         <span>Favorite color:</span>
         <div className={css.radioBtn}>
              <label className={css.formRadio}>
                  <span style={{color: 'green'}}>Green:</span>
                  <Field type="radio" value="green" name="favColor" />
              </label>
              <label className={css.formRadio}>
                  <span style={{color: 'blue'}}>Blue:</span>
                  <Field type="radio" value="blue" name="favColor" />
              </label>   
              <label className={css.formRadio}>
                  <span style={{color: 'red'}}>Red:</span>
                  <Field type="radio" value="red" name="favColor" />
              </label>          
          </div>
          <ErrorMessage className={css.errorMessage} component="p" name='favColor'/> 


			      <button type="submit" className={css.formAddBtn}>Submit</button>
			</Form>
      </Formik>
      </div>
  );
}

export default ContactForm