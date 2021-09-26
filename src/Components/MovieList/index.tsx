import React from 'react'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import MoviesMockData from './movies.json'
import './styles.scss'

const MovieList: React.FC = () => {
    return (
        <div className="movie-list">
            {(MoviesMockData as MoviesResponseModel)?.data.map(x => (
                <Movie key={x.id} movie={x} />
            ))}
        </div>
    )
}

export default MovieList
