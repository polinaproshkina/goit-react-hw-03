import Contact from "../Contact/Contact"
import { nanoid } from 'nanoid';
export default function ContactList({ contactlist, onDelete}) {
    
    return (
        <ul>
            {contactlist.map((el) => (
                <li key={(el.id)||nanoid()}>
                    <Contact contact={el} onDelete={onDelete} />
                </li>))}
        </ul>
    )
}