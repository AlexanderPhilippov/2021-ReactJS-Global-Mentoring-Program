import { Context } from 'Components/Context'
import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { MovieProps } from './models'
import MovieCardMenu from './MovieCardMenu'
import './styles.scss'

const Movie: React.FC<MovieProps> = ({ movie }) => {
    const { setContext } = useContext(Context)

    const history = useHistory()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const handleClick = () => {
        searchParams.set('movie', movie.id.toString())
        history.push({
            pathname: location.pathname,
            search: searchParams.toString(),
        })
        setContext({ movieId: movie.id, pageYOffset: window.scrollY })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="movie-card" onClick={handleClick}>
            <MovieCardMenu movieId={movie.id} />
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
