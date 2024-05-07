// import { Link, useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { fetchMovieDetails } from '../../../movies-api'
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
// import Loader from '../../components/ErrorMessage/ErrorMessage'
// import css from './MovieDetailsPage.module.css'


export default function MovieDetailsPage() {
    // const { movieId } = useParams();
    // const [movie, setMovie] = useState(null)
    // const [isLoading, setIsLoading] =useState(false)
    // const [error, setError] = useState(false)

    // useEffect(() => {
    //     async function getMovieById() {
    //         try {
    //             setIsLoading(true)
    //             const data = await fetchMovieDetails(movieId)
    //             setMovie(data)
    //         } catch (error) {
    //             setError(true)
    //         }
    //         finally {
    //             setIsLoading(false)
    //         }
    //     }
    //     getMovieById()
    // },[movieId])


    return (
        <div>
            {/* {error && <ErrorMessage />}
            {isLoading && <Loader />} */}
        </div>
    )
}