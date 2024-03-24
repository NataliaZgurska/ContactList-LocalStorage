import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";


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
      console.log(values);
       onAdd(values);
		actions.resetForm();
	};


  return (
      <Formik
          initialValues={ FORM_INITIAL_VALUES }
          validationSchema={FormSchema}
          onSubmit={handleSubmit}>
          <Form>
              <label>
                  <span>Name:</span>
                  <br />
                  <Field type="text" name="name" />
                  <ErrorMessage component="p" name='name'/>
              </label>
<br />
             <label>
                  <span>Number:</span>
                  <br />
                  <Field type="number" name="number" />
                     <ErrorMessage component="p" name='number'/>
            </label>
              <br />   
<br />              
			<button type="submit">Submit</button>
			</Form>
    </Formik>
  );
}

export default ContactForm