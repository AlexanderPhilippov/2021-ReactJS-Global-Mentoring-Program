import React, { useState } from 'react'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import MoviesMockData from './movies.json'
import './styles.scss'

const MovieList: React.FC = () => {

    const [moviesResponse] = useState<MoviesResponseModel>(MoviesMockData)

    return (
        <div className="movie-list">
            {moviesResponse?.data.map(x => (
                <Movie key={x.id} movie={x} />
            ))}
        </div>
    )
}

export default MovieList
