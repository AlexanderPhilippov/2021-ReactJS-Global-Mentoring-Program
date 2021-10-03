import React from 'react'
import { MovieProps } from './models'
import './styles.scss'

const Movie: React.FC<MovieProps> = ({ movie, handleEdit }) => {
    return (
        <div className="movie-card" onClick={handleEdit}>
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
