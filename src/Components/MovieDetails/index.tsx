import React from 'react'
import { MovieModel } from 'Components/Movie/models'
import './styles.scss'

const MovieDetails: React.FC<MovieModel> = (movie) => {
    return (
        <div className="movie-details">
            <div className="movie-details__poster">
                <img src={movie.poster_path} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__info-title">{movie.title}</div>
                <div className="movie-details__info-rating">
                    {movie.vote_average}
                </div>
                <div className="movie-details__info-genres">
                    {movie.genres.join(' & ')}
                </div>
                <div className="movie-details__info-year">
                    {movie.release_date?.split('-')[0]}
                </div>
                <div className="movie-details__info-runtime">
                    {Math.floor(movie.runtime / 60)}h&nbsp;
                    {movie.runtime % 60}
                    min
                </div>
                <div className="movie-details__info-overview">
                    {movie.overview}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
