import actionTypes from './actionTypes'
import {
    MovieListAction,
    MovieListFilterAction,
    MoviesResponseModel,
    SearchBy,
    SortOrder,
} from './models'

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

export const setMoviesGenre = (data: string): MovieListFilterAction => ({
    type: actionTypes.SET_MOVIES_FILTER_GENRE,
    payload: { genre: data },
})

export const setSortBy = (data: string): MovieListFilterAction => ({
    type: actionTypes.SET_MOVIES_FILTER_SORT_BY,
    payload: { sortBy: data },
})

export const setSortOrder = (data: SortOrder): MovieListFilterAction => ({
    type: actionTypes.SET_MOVIES_FILTER_SORT_ORDER,
    payload: { sortOrder: data },
})

export const setSearchValue = (data: string): MovieListFilterAction => ({
    type: actionTypes.SET_MOVIES_FILTER_SEARCH,
    payload: { search: data },
})

export const setSearchBy = (data: SearchBy): MovieListFilterAction => ({
    type: actionTypes.SET_MOVIES_FILTER_SORT_ORDER,
    payload: { searchBy: data },
})
