import { useParams, NavLink, Outlet, useLocation} from 'react-router-dom'
import { useEffect, useState, Suspense, useRef} from 'react'
import { fetchMovieDetails } from '../../../movies-api'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import BackLink from '../../components/BackLink/BackLink'
import clsx from 'clsx'
import css from './MovieDetailsPage.module.css'

const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] =useState(false)
    const [error, setError] = useState(false)
    
    const location = useLocation()
    const backLinkURL = useRef(location.state ?? "/movies")

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
        <div>
            {error && <ErrorMessage />}
            {isLoading && <Loader />}

            <BackLink to={backLinkURL.current}>Go back</BackLink>
           
            {movie && <MovieInfo movie={movie} />}
        
            <h3 className={css.header}>Additional Information</h3>
            <ul className={css.list}>
                <li>
                    <NavLink to='cast' className={activeClass}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to='reviews' className={activeClass}>Reviews</NavLink>
                </li>
            </ul>

            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </div>
    )
}