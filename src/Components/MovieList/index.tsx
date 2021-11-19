import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Movie from 'Components/Movie'
import { MoviesResponseModel, SearchBy, SortBy, SortOrder } from './models'
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
import { APP_INIT_STORE_STATE } from 'Utils/constants'

const MovieList: React.FC = () => {
    const isFirstRendering = useRef<boolean>(true)
    const dispatch = useDispatch()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const defaultLimit = '12'

    const sortBy = searchParams.get('sortBy') || SortBy.GENRE
    const sortOrder = searchParams.get('sortOrder') || SortOrder.DESC
    const { genre, searchQuery } =
        useParams<{ genre: string; searchQuery: string }>()
    const searchBy = searchParams.get('searchBy') || SearchBy.TITLE
    const limit = searchParams.get('limit') || defaultLimit
    const offset = searchParams.get('offset') || ''

    const movies = useSelector(Selectors.getMoviesSelector)
    const refreshRequred = useSelector(Selectors.getRefreshRequiredFlagSelector)
    useEffect(() => {
        if (isFirstRendering.current) {
            document.getElementById(APP_INIT_STORE_STATE)?.remove()
            delete window[APP_INIT_STORE_STATE]
            isFirstRendering.current = false
            return
        }
        const params: Record<string, string> = {
            sortBy,
            sortOrder,
            search: searchQuery,
            searchBy,
            filter: genre === 'All' ? '' : genre,
            limit,
            offset,
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
    }, [
        genre,
        sortBy,
        sortOrder,
        searchQuery,
        searchBy,
        offset,
        refreshRequred,
    ])

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
