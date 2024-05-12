import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieList from '../../components/MovieList/MovieList'
import { fetchMovieBySearch } from '../../../movies-api'
import SearchBar from '../../components/SearchBar/SearchBar'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import css from './MoviesPage.module.css'

export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const movieNameParam = searchParams.get("query") ?? "";
    
    useEffect(() => {
        if (!movieNameParam) {
            return
            }
        async function getMovies() {
            try {
                setIsLoading(true)
                const data = await fetchMovieBySearch(movieNameParam)
                setMovies(data.results)
                setError(data.results.length === 0)
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getMovies()
    }, [movieNameParam])

    async function handleSubmit(value) {
        setSearchParams({ query: value });
    }

    return (
        <div className={css.container}>
            <SearchBar onSubmit={handleSubmit} />
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            {movies.length > 0 && <MovieList movies={movies} />
            }
      </div>
    )
}

