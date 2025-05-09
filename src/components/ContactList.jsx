import Contact from "./Contact"
export default function ContactList({ contactlist }) {
    
    return (
        <ul>
            {contactlist.map((el) => (
                <li key={(el.id)||Math.random()}>
                    <Contact contact={el} />
                </li>))}
        </ul>
    )
}