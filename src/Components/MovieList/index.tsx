import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from 'Components/Movie'
import {
    MovieListFilterState,
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
import { AppState } from 'src/Store/rootReducer'

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

    const { data, error, totalAmount } = useSelector(
        (state: AppState) => state.movies
    )

    const { genre, sortBy, sortOrder } = useSelector(
        (state: AppState): MovieListFilterState => state.filter
    )

    useEffect(() => {
        dispatch(fetchMoviesBegin())
        const response = useFetch<MoviesResponseModel>(
            `movies?sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}&limit=12`
        )
        response
            .then((data) => {
                dispatch(fetchMoviesSuccess(data))
            })
            .catch((e: Error) => {
                dispatch(fetchMoviesError(e.message))
            })
    }, [genre, sortBy, sortOrder])

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

    return !error && data ? (
        <>
            <Modal isOpen={localState.isModalOpen} closeAction={handleClose}>
                <MovieForm
                    action={localState.currentAction}
                    movie={localState.selectedMovie}
                />
            </Modal>

            <div className="movie-list">
                <MoviesHeader total={totalAmount} />
                {data.map((movie) => (
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
    ) : null
}

export default MovieList
