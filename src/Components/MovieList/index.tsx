import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from 'Components/Movie'
import { MoviesResponseModel } from './models'
import { MoviesHeader } from './Header'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import './styles.scss'
import { useFetch, useCreateUrl, MoviesRoute } from 'Utils'
import {
    fetchMoviesBegin,
    fetchMoviesError,
    fetchMoviesSuccess,
} from './actions'
import * as Selectors from './selectors'

const MovieList: React.FC = () => {
    const dispatch = useDispatch()

    const movies = useSelector(Selectors.getMoviesSelector)
    const sortBy = useSelector(Selectors.getSotrtBySelector)
    const sortOrder = useSelector(Selectors.getSortOrderSelector)
    const genre = useSelector(Selectors.getGenreSelector)
    const search = useSelector(Selectors.getSearchSelector)
    const searchBy = useSelector(Selectors.getSearchBySelector)
    const refreshRequred = useSelector(Selectors.getRefreshRequiredValue)

    useEffect(() => {
        const defaultLimit = '12'
        const params: Record<string, string> = {
            sortBy,
            sortOrder,
            search,
            searchBy,
            filter: genre,
            limit: defaultLimit,
        }
        dispatch(fetchMoviesBegin())
        const url = useCreateUrl(MoviesRoute, params)
        useFetch<MoviesResponseModel>(url)
            .then((data) => {
                dispatch(fetchMoviesSuccess(data))
            })
            .catch((e: Error) => {
                dispatch(fetchMoviesError(e.message))
            })
    }, [genre, sortBy, sortOrder, search, searchBy, refreshRequred])

    return (
        <>
            <Modal>
                <MovieForm />
            </Modal>

            <div className="movie-list">
                <MoviesHeader />
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )
}

export default MovieList
