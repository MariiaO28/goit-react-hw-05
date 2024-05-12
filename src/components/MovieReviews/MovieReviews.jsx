import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchMoviesReviews } from '../../../movies-api'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import css from './MovieReviews.module.css'

export default function MovieReviews() {
    const { movieId } = useParams()
    const [reviews, setReviews] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovieReviews() {
            try {
                setIsLoading(true)
                const data = await fetchMoviesReviews(movieId)
                setReviews(data.results)
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
    getMovieReviews()
    }, [movieId])

    return (
        <div>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            {reviews && reviews.length === 0 &&
                <p className={css.noinfo}>There is no reviews yet.</p>
            }
                <ul className={css.list}>
                    {reviews && reviews.map(({ id, content, author }) => (
                        <li key={id} className={css.review}>
                            <p className={css.text}><b>Author:</b> {author}</p>
                                <p className={css.text}><b>Review:</b> {content}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}