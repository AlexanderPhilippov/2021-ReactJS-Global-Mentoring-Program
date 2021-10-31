/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
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
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const sortBy = searchParams.get('sortBy') || 'genres'
    const sortOrder = searchParams.get('sortOrder') || 'desc'
    const genre = searchParams.get('genre') || ''
    const search = searchParams.get('search') || ''
    const searchBy = searchParams.get('searchBy') || 'title'
    const limit = searchParams.get('limit') || '12'
    const offset = searchParams.get('offset') || ''

    const movies = useSelector(Selectors.getMoviesSelector)
    const refreshRequred = useSelector(Selectors.getRefreshRequiredFlagSelector)

    useEffect(() => {
        const params: Record<string, string> = {
            sortBy,
            sortOrder,
            search,
            searchBy,
            filter: genre,
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
    }, [genre, sortBy, sortOrder, search, searchBy, offset, refreshRequred])

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
