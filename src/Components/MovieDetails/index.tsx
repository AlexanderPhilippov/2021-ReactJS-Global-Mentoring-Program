import React from 'react'
import './styles.scss'

const movie = {
    id: 337167,
    title: 'Fifty Shades Freed',
    tagline: 'Don`t miss the climax',
    vote_average: 6.1,
    vote_count: 1195,
    release_date: '2018-02-07',
    poster_path:
        'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
        'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    budget: 55000000,
    revenue: 136906000,
    genres: ['Drama', 'Romance'],
    runtime: 106,
}

const MovieDetails: React.FC = () => {
    return (
        <div className="movie-details">
            <div className="movie-details__poster">
                <img src={movie.poster_path} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__info-title">{movie.title}</div>
                <div className="movie-details__info-rating">{movie.vote_average}</div>
                <div className="movie-details__info-genres">{movie.genres.join(' & ')}</div>
                <div className="movie-details__info-year">{movie.release_date.split('-')[0]}</div>
                <div className="movie-details__info-runtime">
                    {Math.floor(movie.runtime / 60)}h&nbsp;{movie.runtime % 60}min
                </div>
                <div className="movie-details__info-overview">{movie.overview}</div>
            </div>
        </div>
    )
}

export default MovieDetails
