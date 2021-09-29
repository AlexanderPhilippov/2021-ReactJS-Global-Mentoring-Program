import React from 'react'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import MoviesMockData from './movies.json'
import './styles.scss'
import { MoviesHeader } from './Header'

const MovieList: React.FC = () => {
    return (
        <div className="movie-list">
            <MoviesHeader total={MoviesMockData.totalAmount} />
            {(MoviesMockData as MoviesResponseModel)?.data.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
