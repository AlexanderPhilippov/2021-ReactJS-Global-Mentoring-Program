import actionTypes from './actionTypes'
import { MovieListAction, MoviesResponseModel } from './models'

export const fetchMoviesBegin = (): MovieListAction => ({
    type: actionTypes.FETCH_MOVIES_BEGIN,
})

export const fetchMoviesSuccess = (
    data: MoviesResponseModel
): MovieListAction => ({
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: data,
})

export const fetchMoviesError = (data: string): MovieListAction => ({
    type: actionTypes.FETCH_MOVIES_ERROR,
    error: data,
})
