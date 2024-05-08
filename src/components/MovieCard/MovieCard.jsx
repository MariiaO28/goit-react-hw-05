import { Link} from "react-router-dom";
import css from './MovieCard.module.css'

export default function MovieCard({ movie: { id, title,poster_path } }) {

    return (
        <div className={css.container}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width='300px' />
        <Link to={`/movies/${id}`} className={css.card}>
            {title}
        </Link>
        </div>
    )
}