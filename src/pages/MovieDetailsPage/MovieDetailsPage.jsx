import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../../../movies-api'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import MovieCast from '../../components/MovieCast/MovieCast'
import MovieReviews from '../../components/MovieReviews/MovieReviews'
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] =useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovieById() {
            try {
                setIsLoading(true)
                const data = await fetchMovieDetails(movieId)
                setMovie(data)
            } catch (error) {
                setError(true)
            }
            finally {
                setIsLoading(false)
            }
        }
        getMovieById()
    },[movieId])

    return (
        <div className={css.container}>
            {error && <ErrorMessage />}
            {isLoading && <Loader />}
            <Link to='/movies'>Go back</Link>
            {movie && <MovieInfo movie={movie} />}
            <b>Additional Information</b>
            <ul className={css.list}>
                <li className={css.link}><MovieCast /></li>
                <li className={css.link}><MovieReviews /></li>
            </ul>
        </div>
    )
}