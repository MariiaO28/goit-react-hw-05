import css from './MovieCard.module.css'

export default function MovieCard({ movie: { title,poster_path } }) {

    return (
        <div className={css.container}>
            {poster_path === null ?
                <img src={`https://cdn-icons-png.freepik.com/512/2270/2270642.png`} alt={title} width='300px'className={css.picture}/>
                : <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width='200px' className={css.picture}/>}
            <h3 className={css.title}>{ title }</h3>
        </div>
    )
}