import css from './MovieInfo.module.css'

export default function MovieInfo({ movie }) {
    return (
        <div className={css.container}>
           {movie.poster_path === null ? <img src={`https://cdn-icons-png.freepik.com/512/2270/2270642.png`} alt={movie.title} width='300px' className={css.picture} /> : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='300px' className={css.picture}/>}
            <div className={css.data}>
                <h2 className={css.header}>{movie.title} ({movie.release_date.slice(0,4)})</h2>
                <p className={css.text}>User Score: {Math.round(movie.vote_average*10).toFixed(0)}%</p>
                <h3 className={css.text}>Owerview</h3>
                <p className={css.text}>{movie.overview}</p>
                <h3 className={css.text}>Genres</h3>
                <ul className={css.list}>
                    {movie.genres.map((genre) =>
                        <li key={genre.id} className={css.genre}>
                            {genre.name}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}
