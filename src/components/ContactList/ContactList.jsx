import Contact from "../Contact/Contact"
import { nanoid } from 'nanoid';
import css from './ContactList.module.css'

export default function ContactList({ contactlist, onDelete}) {
    
    return (
        <ul className={css.list}>
            {contactlist.map((el) => (
                <li key={(el.id)||nanoid()}className={css.listIem} >
                    <Contact contact={el} onDelete={onDelete} />
                </li>))}
        </ul>
    )
}