import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MovieProps } from './models'
import MovieCardMenu from './MovieCardMenu'
import './styles.scss'

const Movie: React.FC<MovieProps> = ({ movie }) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    searchParams.set('movie', movie.id.toString())
    const linkTo = `${location.pathname}?${searchParams.toString()}`

    return (
        <Link className="movie-card" to={linkTo}>
            <MovieCardMenu movieId={movie.id} />
            <div className="movie-card__image">
                <img src={movie.poster_path} alt={`${movie.title} poster`} />
            </div>
            <div className="movie-card__title">{movie.title}</div>
            <div className="movie-card__release_date">
                {movie.release_date?.split('-')[0]}
            </div>
            <div className="movie-card__genres">{movie.genres.join(', ')}</div>
        </Link>
    )
}

export default Movie
