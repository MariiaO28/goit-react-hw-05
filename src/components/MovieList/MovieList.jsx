import { lazy } from 'react'
const MovieDetailsPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
import css from './MovieList.module.css'

export default function MovieList({ movies }) {
    return (
        <ul className={css.list}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieDetailsPage movie={movie} />
                </li>
            )) }
        </ul>
    )
}