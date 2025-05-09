import { useId } from "react";

export default function ContactForm({ onSubmit }) {
    
    const fieldId = { useId };
    
    const handleSubmit = (formData) => {
      
        const formValues = Object.fromEntries(formData);
        onSubmit(formValues);

    }
    
    return(
        < form action={handleSubmit}>
            <label htmlFor={`${fieldId}-name`}>Name</label>
            <input type="text" name="name" id={`${fieldId}-name`}></input>

            <label htmlFor={`${fieldId}-number`}>Number</label>
            <input type="number" name="number" id={`${fieldId}-number`}></input>

            <button type="submit">Add contact</button>
        </form >
    )
};