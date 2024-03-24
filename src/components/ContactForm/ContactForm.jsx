import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";

console.log(Formik);
const contactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short number!").max(50, "Too Long number!").required("Required")
});


const FORM_INITIAL_VALUES = {
    name: "",
    number: "",
}

const ContactForm = ({ onAdd }) => {

    const handleSubmit = (values, actions) => {
        console.log('values: ', values);

        onAdd(values);
        actions.resetForm();
    }

  return (
      <Formik
          initialValues={ }
          validationSchema={contactSchema}
          onSubmit={handleSubmit}>

          <Form>
              <label>
                  <span>Name:</span>
                  <br />
                  <Field type="text" name="name" />  
                  <ErrorMessage component="p" name="name"/>
              </label>
              <br />
               <label>
                  <span>Number:</span>
                  <br />
                  <Field type="number" name="number" />  
                  <ErrorMessage component="p" name="number"/>
              </label>          

            <button type="submit">Add Contact</button>  
        </Form>


    </Formik>
  )
}

export default ContactForm