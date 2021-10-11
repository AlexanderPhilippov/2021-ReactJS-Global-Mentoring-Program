import React, { useEffect, useReducer, useState } from 'react'
import Movie from 'Components/Movie'
import {
    MovieListLocalState,
    MovieListReducerAction,
    MoviesResponseModel,
} from './models'
import { MoviesHeader } from './Header'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import { MovieFormAction } from 'Components/MovieForm/models'
import './styles.scss'
import { MovieModel } from 'Components/Movie/models'
import { useFetch } from 'Utils'

const reducer = (
    state: MovieListLocalState,
    action: MovieListReducerAction
) => {
    return action.payload
}

const initialState: MovieListLocalState = {
    isModalOpen: false,
    selectedMovie: undefined,
    currentAction: undefined,
}

const MovieList: React.FC = () => {
    const [fetchedData, setFetchedData] = useState<MoviesResponseModel>()

    useEffect(() => {
        const data = useFetch<MoviesResponseModel>('url to movies api')
        setFetchedData(data)
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (movie: MovieModel, type: MovieFormAction) => {
        dispatch({
            payload: {
                selectedMovie: movie,
                currentAction: type,
                isModalOpen: true,
            },
        })
    }

    const handleClose = () => {
        dispatch({
            payload: {
                selectedMovie: undefined,
                currentAction: undefined,
                isModalOpen: false,
            },
        })
    }

    return (
        <>
            {!fetchedData ? (
                <div>Loading....</div>
            ) : (
                <>
                    <Modal isOpen={state.isModalOpen} closeAction={handleClose}>
                        <MovieForm
                            action={state.currentAction}
                            movie={state.selectedMovie}
                        />
                    </Modal>

                    <div className="movie-list">
                        <MoviesHeader total={fetchedData.totalAmount} />
                        {fetchedData?.data.map((movie) => (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                handleEdit={() =>
                                    handleChange(movie, MovieFormAction.EDIT)
                                }
                                handleDelete={() =>
                                    handleChange(movie, MovieFormAction.DELETE)
                                }
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

export default MovieList
