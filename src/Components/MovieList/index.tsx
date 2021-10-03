import React, { useState, useEffect } from 'react'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import MoviesMockData from './movies.json'
import { MoviesHeader } from './Header'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import { MovieFormAction } from 'Components/MovieForm/models'
import './styles.scss'
import { MovieModel } from 'Components/Movie/models'

const MovieList: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState<MovieModel>()

    const handleEdit = (movie: MovieModel) => {
        setSelectedMovie(movie)
    }

    const handleDelete = (movie: MovieModel) => {
        setSelectedMovie(movie)
    }

    const handleClose = () => {
        setIsModalVisible(false)
        setSelectedMovie(undefined)
    }

    useEffect(() => {
        if (isModalVisible) return
        if (selectedMovie) setIsModalVisible(true)
    }, [selectedMovie])

    return (
        <>
            <Modal
                isOpen={isModalVisible}
                closeAction={handleClose}
                Content={() =>
                    MovieForm({
                        action: MovieFormAction.EDIT,
                        movie: selectedMovie,
                    })
                }
            />
            <div className="movie-list">
                <MoviesHeader total={MoviesMockData.totalAmount} />
                {(MoviesMockData as MoviesResponseModel)?.data.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        handleEdit={() => handleEdit(movie)}
                        handleDelete={() => handleDelete(movie)}
                    />
                ))}
            </div>
        </>
    )
}

export default MovieList
