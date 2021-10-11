import { Context } from 'Components/Context'
import React, { useContext } from 'react'
import { MovieProps } from './models'
import MovieCardMenu from './MovieCardMenu'
import './styles.scss'

const Movie: React.FC<MovieProps> = ({ movie, handleEdit, handleDelete }) => {
    const { setContext } = useContext(Context)
    const handleClick = () => {
        setContext(movie)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className="movie-card" onClick={handleClick}>
            <MovieCardMenu
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            <div className="movie-card__image">
                <img src={movie.poster_path} alt={`${movie.title} poster`} />
            </div>
            <div className="movie-card__title">{movie.title}</div>
            <div className="movie-card__release_date">
                {movie.release_date?.split('-')[0]}
            </div>
            <div className="movie-card__genres">{movie.genres.join(', ')}</div>
        </div>
    )
}

export default Movie
