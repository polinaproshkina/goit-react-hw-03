export default function Contact({contact:{id,name,number}, onDelete}) {
    return <>
        <p>{name}</p>
        <p>{number}</p>
        <button type="submit" onClick={()=> onDelete(id)}>Delete</button>
    </>
}