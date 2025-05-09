export default function SerchBox({ onChange, inputValue }) {

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    
    return (
        <>
            <label>Find contacts by Name</label>
            <input type="text" name="searchName" onChange={handleChange}></input>
            <p>{inputValue}</p>
        </>
    )
}