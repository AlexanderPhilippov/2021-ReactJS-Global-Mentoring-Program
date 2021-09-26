import React, { useState } from 'react'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import MoviesMockData from './movies.json'

const MovieList: React.FC = () => {

    const [moviesResponse] = useState<MoviesResponseModel>(MoviesMockData)

    return (
        <>
            {moviesResponse?.data.map(x => (
                <Movie key={x.id} movie={x} />
            ))}
        </>
    )
}

export default MovieList
