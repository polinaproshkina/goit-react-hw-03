export default function SerchBox({ onChange }) {

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    
    return (
        <>
            <label>Find contacts by Name</label>
            <input type="text" name="searchName" onChange={handleChange}></input>
        </>
    )
}