import { Link } from "react-router-dom";
import css from './MovieCard.module.css'

export default function MovieCard({movie : {id, title}}) {
    return (
        <Link to={`/trending/movie/${id}`} className={css.card}>
            {title}
        </Link>
    )
}