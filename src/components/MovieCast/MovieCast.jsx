import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovieCast } from '../../../movies-api'
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import css from './MovieCast.module.css'

export default function MovieCast() {
    const { movieId } = useParams()
    const [cast, setCast] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovieCast() {
            try {
                setIsLoading(true)
                const data = await fetchMovieCast(movieId)
                setCast(data.cast)
            } catch (error) {
                setError(true)
            }
            finally {
                setIsLoading(false)
            }
        }
        getMovieCast()
    }, [movieId])

    return (
        <div>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            {cast && cast.length === 0 &&
                <p className={css.noinfo} >There is no information about the cast yet.</p>
            }
            <ul className={css.list}>
                {cast && cast.map(({ id, profile_path, name, character }) => (
                    <li key={id} className={css.card}>
                        {profile_path === null ? <img src={`https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png`} width="120px" className={css.picture} /> : <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width="120px" className={css.picture} />}
                        <p className={css.text}>{name}</p>
                        <p className={css.text}>{character}</p>
                    </li>
                    ))
            }
            </ul> 
        </div>
    )
}