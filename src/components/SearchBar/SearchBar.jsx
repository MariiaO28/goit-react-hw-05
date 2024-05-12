import toast, { Toaster } from 'react-hot-toast'
import css from './SearchBar.module.css'

const putValueForSearch = () => toast.error("Please enter requested movie!");

export default function SearchBar({ onSubmit }) {
    function hendleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const value = form.elements.search.value.trim();
        if (value === "") {
            putValueForSearch()
            form.reset();
        } else {
            onSubmit(value);
            form.reset();
        }
    }
    
    return (
        <form className={css.form} onSubmit={hendleSubmit}>
             <input
                type="text"
                name="search"
                className={css.input}
                placeholder="Search movies and series"
            />
            <button type="submit" className={css.button}>Search</button>
            <Toaster
            position="top-center"
            reverseOrder={false} />
    </form>
    )
}