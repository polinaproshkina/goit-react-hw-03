import css from './SearchBox.module.css'

export default function SearchBox({ onChange }) {

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    
    return (
        <div className={css.searchBox}>
            <label className={css.searchLabel}>Find contacts by Name</label>
            <input type="text" name="searchName" onChange={handleChange} className={css.searchInput}></input>
        </div>
    )
}