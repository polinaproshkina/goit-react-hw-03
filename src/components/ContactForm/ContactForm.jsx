import { Formik, Form, Field, ErrorMessage} from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
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
        <Formik initialValues={{ name: '', number: ''}} validationSchema={contactSchema} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.inputForm}>
                    <label htmlFor={`${fieldId}-name`} className={css.inputLabel}>Name</label>
                    <Field type="text" name="name" id={`${fieldId}-name`} className={css.input} />
                    <ErrorMessage name="name" component='span' className={css.errorText}></ErrorMessage>

                    <label htmlFor={`${fieldId}-number`} className={css.inputLabel}>Number</label>
                    <Field type="text" name="number" id={`${fieldId}-number`} className={css.input}/>
                    <ErrorMessage name="number" component='span' className={css.errorText}></ErrorMessage>
                </div>
            

                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
};