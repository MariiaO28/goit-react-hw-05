export default function MovieInfo({movie}) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='300px' />
            <div>
                <h2>{movie.title} ({movie.release_date.slice(0,4)})</h2>
                <p>User Score: {Math.round(movie.popularity)}</p>
                <b>Owerview</b>
                <p>{movie.overview}</p>
                <p>Genres</p>
                <p>{ movie.genres.map((genre)=>genre.name)}</p>
            </div>
        </div>
    )
}