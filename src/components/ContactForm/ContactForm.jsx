import { Formik, Form, Field, ErrorMessage} from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid';


const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required()
})

export default function ContactForm({ onSubmit}) {
    
    const fieldId = { useId };
    
    const handleSubmit = (values,helpers) => {
      
        const formValues = { ...values, id:nanoid() };
        onSubmit(formValues);
        
        console.log(formValues);

        helpers.resetForm();

    }
    
    return(
        <Formik initialValues={{ name: '', number: '' }} validationSchema={contactSchema} onSubmit={handleSubmit}>
            <Form>
            <label htmlFor={`${fieldId}-name`}>Name</label>
                <Field type="text" name="name" id={`${fieldId}-name`} />
                <ErrorMessage name="name" component='span'></ErrorMessage>

            <label htmlFor={`${fieldId}-number`}>Number</label>
                <Field type="number" name="number" id={`${fieldId}-number`} />
                <ErrorMessage name="number" component='span'></ErrorMessage>

            <button type="submit">Add contact</button>
        </Form>
        </Formik>
    )
};