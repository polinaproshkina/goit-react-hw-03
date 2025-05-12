import css from './Contact.module.css'
import contactPic from '../svg/contact.png'
import phonePic from '../svg/phone.png'


export default function Contact({ contact: { id, name, number }, onDelete }) {
    return <>
        <div>
            <div className={css.contactData}>
                <img src={contactPic} alt="contact" className={css.contactPic} />
                <p className={css.contactName}>{name}</p>
            </div>
            <div className={css.contactData}>
                <img src={phonePic} alt="phone" className={css.contactPic}/>
                <p className={css.contactNumber}>{number}</p>
            </div>

        </div>
        <button type="submit" onClick={()=> onDelete(id)} className={css.button}>Delete</button>
    </>
}