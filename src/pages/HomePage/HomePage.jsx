import { useEffect, useState } from 'react'
import { fetchTrendMovies } from '../../../movies-api'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MovieList from '../../components/MovieList/MovieList'
import css from './HomePage.module.css'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getTrendMovies() {
            try {
                setIsLoading(true)
                const data = await fetchTrendMovies();
                setMovies(data.results)
            } catch (error) {
                setError(true)
            }
            finally {
                setIsLoading(false)
            }
        }
        getTrendMovies();
    }, []);

    return (
        <div className={css.container}>
            <h2 className={css.header}>Tranding Today</h2>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            {movies.length>0 && <MovieList movies={movies} />}
        </div>
    )
}