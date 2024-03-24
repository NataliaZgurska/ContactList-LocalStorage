import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import css from './ContactForm.module.css'

const FORM_INITIAL_VALUES = {
    name: "",
    number: "",
}

const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
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
                  <ErrorMessage component="p" name='name'/>
              </label>

             <label className={css.formLabel}>
                  <span>Number:</span>
                 
                  <Field type="number" name="number" />
                     <ErrorMessage component="p" name='number'/>
            </label>
   
			      <button type="submit" className={css.formAddBtn}>Submit</button>
			</Form>
      </Formik>
      </div>
  );
}

export default ContactForm