import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import {
    fetchMoviesBegin,
    fetchMoviesError,
    fetchMoviesSuccess,
} from './actions'
import * as Selectors from './selectors'

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
    const [localState, setLocalState] = useReducer(reducer, initialState)
    const dispatch = useDispatch()

    const movies = useSelector(Selectors.getMoviesSelector)
    const sortBy = useSelector(Selectors.getSotrtBySelector)
    const sortOrder = useSelector(Selectors.getSortOrderSelector)
    const genre = useSelector(Selectors.getGenreSelector)
    const search = useSelector(Selectors.getSearchSelector)
    const searchBy = useSelector(Selectors.getSearchBySelector)

    useEffect(() => {
        const defaultLimit = '12'
        const apiRoute = 'movies'
        const params: Record<string, string> = {
            sortBy,
            sortOrder,
            search,
            searchBy,
            filter: genre,
            limit: defaultLimit,
        }
        dispatch(fetchMoviesBegin())
        useFetch<MoviesResponseModel>(apiRoute, params)
            .then((data) => {
                dispatch(fetchMoviesSuccess(data))
            })
            .catch((e: Error) => {
                dispatch(fetchMoviesError(e.message))
            })
    }, [genre, sortBy, sortOrder, search, searchBy])

    const handleChange = (movie: MovieModel, type: MovieFormAction) => {
        setLocalState({
            payload: {
                selectedMovie: movie,
                currentAction: type,
                isModalOpen: true,
            },
        })
    }

    const handleClose = () => {
        setLocalState({
            payload: {
                selectedMovie: undefined,
                currentAction: undefined,
                isModalOpen: false,
            },
        })
    }

    return (
        <>
            <Modal isOpen={localState.isModalOpen} closeAction={handleClose}>
                <MovieForm
                    action={localState.currentAction}
                    movie={localState.selectedMovie}
                />
            </Modal>

            <div className="movie-list">
                <MoviesHeader />
                {movies.map((movie) => (
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
    )
}

export default MovieList
